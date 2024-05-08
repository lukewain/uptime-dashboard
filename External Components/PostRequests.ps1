$hostname = HOSTNAME.EXE
$time = Get-Date

Write-Host $time


$postParams = @{hostname = $hostname; time = $time; token = $token }

Invoke-WebRequest -Uri "https://uptime.wekul.dev/" -Method POST -Body $postParams