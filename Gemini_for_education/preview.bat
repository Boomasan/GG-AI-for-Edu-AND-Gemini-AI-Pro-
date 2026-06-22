@echo off
:: Change directory to the folder containing this batch script
cd /d "%~dp0"
title Gemini for Education - Local Preview

echo ===================================================
echo   Gemini for Education - Local Preview Server
echo ===================================================
echo.
echo Starting server...
echo.

:: Execute npm run preview (tries standard then falls back to node directly if npm path blocks)
cmd /c "npm run preview || npm.cmd run preview || node server.js"

pause
