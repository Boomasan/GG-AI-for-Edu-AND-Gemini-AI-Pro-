@echo off
if "%~1"=="" (
    set "msg=update"
) else (
    set "msg=%~1"
)
git add -A
git commit -m "%msg%"
