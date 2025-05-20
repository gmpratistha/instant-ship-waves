
import { useState, useEffect } from 'react';
import { loadImage, removeBackground } from '../utils/imageUtils';

export const processLogo = async () => {
  try {
    // Fetch the new logo
    const response = await fetch('/lovable-uploads/ad2b89c1-b3e4-4bbf-b260-3013015e7f59.png');
    if (!response.ok) {
      throw new Error('Failed to fetch logo');
    }
    
    const blob = await response.blob();
    const image = await loadImage(blob);
    const processedBlob = await removeBackground(image);
    
    // Create a URL for the processed image
    const processedUrl = URL.createObjectURL(processedBlob);
    
    // Apply this to all instances of the old logo
    const logoElements = document.querySelectorAll('img[src="/lovable-uploads/f4eea901-0f64-404b-9722-22b10cde2f00.png"]');
    logoElements.forEach((img) => {
      (img as HTMLImageElement).src = processedUrl;
    });
    
    return processedUrl;
  } catch (error) {
    console.error('Error processing logo:', error);
    return null;
  }
};

const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  
  useEffect(() => {
    const process = async () => {
      try {
        await processLogo();
      } finally {
        setIsProcessing(false);
      }
    };
    
    process();
  }, []);
  
  return null; // This component doesn't render anything
};

export default LogoProcessor;
