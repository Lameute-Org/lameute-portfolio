#!/bin/bash
echo "Starting deployment"

echo "Step 1: Load environment variables from the .env file"
# Load environment variables from the .env file
if [ -f .env ]; then
 export $(grep -v '^#' .env | xargs)
else
 echo ".env file not found! Exiting."
 exit 1
fi

# Configuration
REPO_DIR="lameute-portfolio"  # Remplacez par le chemin absolu du répertoire contenant le projet

# Vérification du répertoire
if [ ! -d "$REPO_DIR" ]; then
 echo "Error : $REPO_DIR directory not found."
 exit 1
fi

# Accéder au répertoire
cd "$REPO_DIR" || {
 echo "Error : can't access directory $REPO_DIR."
 exit 1
}

# Save local changes
git add .
git commit -m "Save local changes"

# Mettre à jour le dépôt avec git pull
echo "Step 2: Updating repo..."
if git pull https://$GITHUB_TOKEN@github.com/Lameute-Org/lameute-portfolio.git --no-rebase; then
 echo "Update succesful."
else
 echo "Error : probleme while updating repo."
 exit 1
fi

echo "Step 3: Generate ssl certificates..."
docker run --rm -v $(pwd)/certbot/conf:/etc/letsencrypt -v $(pwd)/certbot/www:/var/www/certbot certbot/certbot certonly --webroot -w /var/www/certbot -d lameute.cm --email bakehew@gmail.com --agree-tos --no-eff-email

echo "Step 4: Constructing website container..."
# Construire et démarrer les nouveaux conteneurs
docker compose up -d my-website --build

echo "Step 4: Destroy all unused containers..."
docker system prune -f

echo "Deployment complete 🔥🔥🔥"