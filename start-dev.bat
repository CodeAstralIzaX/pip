@echo off
REM Windows batch script to start development servers

echo.
echo Starting Email Contact Form Setup...
echo.

REM Check if .env file exists
if not exist .env (
    echo .env file not found!
    echo Creating .env from .env.example...
    copy .env.example .env
    echo Please edit .env with your email credentials
    echo.
)

REM Check if node_modules exists
if not exist node_modules (
    echo Installing dependencies...
    call npm install
)

echo.
echo Starting development servers...
echo.
echo Frontend will be available at: http://localhost:5173
echo Backend API will be available at: http://localhost:3001
echo.
echo Press Ctrl+C to stop the servers
echo.

REM Start both servers in separate windows
start "Frontend - Vite" cmd /k npm run dev
start "Backend - Email Server" cmd /k npm run server:dev

echo.
echo Both servers should be starting in separate windows...
