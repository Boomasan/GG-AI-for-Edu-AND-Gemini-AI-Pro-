@echo off
chcp 65001 > nul
echo ========================================================
echo   Deploying to Google Cloud Run
echo   Service: gemini-edu-and-google-ai-pro
echo   Project: astral-host-252108
echo   Region:  asia-southeast1
echo ========================================================
echo.

gcloud run deploy gemini-edu-and-google-ai-pro ^
  --source . ^
  --project astral-host-252108 ^
  --region asia-southeast1 ^
  --allow-unauthenticated ^
  --clear-base-image

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Deployed successfully to Cloud Run!
) else (
    echo.
    echo [ERROR] Deployment encountered an error.
)
pause
