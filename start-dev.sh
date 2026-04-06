#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting Email Contact Form Setup${NC}\n"

# Check if .env file exists
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️  .env file not found!${NC}"
    echo "Creating .env from .env.example..."
    cp .env.example .env
    echo -e "${YELLOW}Please edit .env with your email credentials${NC}\n"
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

echo -e "${GREEN}Starting development servers...${NC}\n"
echo "Frontend will be available at: http://localhost:5173"
echo "Backend API will be available at: http://localhost:3001"
echo -e "\nPress Ctrl+C to stop both servers\n"

# Start both server and dev
npm run dev &
npm run server:dev &

# Wait for both processes
wait
