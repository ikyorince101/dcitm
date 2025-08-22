# PowerShell script to convert PNG to ICO
Add-Type -AssemblyName System.Drawing

function Convert-PngToIco {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int[]]$Sizes = @(16, 32, 48, 64, 128, 256)
    )

    try {
        # Load the source image
        $sourceImage = [System.Drawing.Image]::FromFile($InputPath)
        
        # Create a new bitmap for each size and save as ICO
        $iconSizes = @()
        
        foreach ($size in $Sizes) {
            # Create a new bitmap of the target size
            $resizedBitmap = New-Object System.Drawing.Bitmap($size, $size)
            $graphics = [System.Drawing.Graphics]::FromImage($resizedBitmap)
            
            # Set high quality rendering
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            
            # Draw the resized image
            $graphics.DrawImage($sourceImage, 0, 0, $size, $size)
            
            # Save as PNG first (we'll convert to ICO after)
            $tempPngPath = "$env:TEMP\icon_$size.png"
            $resizedBitmap.Save($tempPngPath, [System.Drawing.Imaging.ImageFormat]::Png)
            
            $graphics.Dispose()
            $resizedBitmap.Dispose()
            
            $iconSizes += $tempPngPath
        }
        
        # For ICO creation, we'll save the 32x32 version as the main ICO
        $mainIcon = New-Object System.Drawing.Bitmap(32, 32)
        $mainGraphics = [System.Drawing.Graphics]::FromImage($mainIcon)
        $mainGraphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $mainGraphics.DrawImage($sourceImage, 0, 0, 32, 32)
        
        # Save as ICO (this will be a single 32x32 icon)
        $iconStream = New-Object System.IO.FileStream($OutputPath, [System.IO.FileMode]::Create)
        $mainIcon.Save($iconStream, [System.Drawing.Imaging.ImageFormat]::Icon)
        $iconStream.Close()
        
        $mainGraphics.Dispose()
        $mainIcon.Dispose()
        $sourceImage.Dispose()
        
        # Clean up temp files
        foreach ($tempFile in $iconSizes) {
            Remove-Item $tempFile -ErrorAction SilentlyContinue
        }
        
        Write-Host "Successfully converted $InputPath to $OutputPath" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "Error converting image: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Convert favicon.png to favicon.ico
$success1 = Convert-PngToIco -InputPath "public\favicon.png" -OutputPath "public\favicon.ico"

# Convert dcitm_logo.png to dcitm_logo.ico  
$success2 = Convert-PngToIco -InputPath "src\assets\dcitm_logo.png" -OutputPath "public\dcitm_logo.ico"

if ($success1 -and $success2) {
    Write-Host "`nBoth ICO files created successfully!" -ForegroundColor Green
    Write-Host "- public\favicon.ico" -ForegroundColor Cyan
    Write-Host "- public\dcitm_logo.ico" -ForegroundColor Cyan
} else {
    Write-Host "`nSome conversions failed. Check the errors above." -ForegroundColor Yellow
}
