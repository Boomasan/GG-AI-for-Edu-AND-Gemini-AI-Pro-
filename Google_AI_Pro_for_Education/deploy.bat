@echo off
chcp 65001 > nul
echo ========================================================
echo   Deploying Google_AI_Pro_for_Education to Cloud Run
echo   Region:  asia-southeast1
echo ========================================================
echo.

gcloud run deploy google-ai-pro-for-education ^
  --source . ^
  --region asia-southeast1 ^
  --allow-unauthenticated

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Deployed successfully to Cloud Run!
) else (
    echo.
    echo [ERROR] Deployment failed.
)
pause
