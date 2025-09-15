"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export interface CampaignData {
  id: string
  title: string
  description: string
  image?: string
  validUntil?: string
}

interface CampaignPopupProps {
  campaigns: CampaignData[] | null
}

const CampaignPopup = ({ campaigns }: CampaignPopupProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentCampaignIndex, setCurrentCampaignIndex] = useState(0)
  
  const currentCampaign = campaigns?.[currentCampaignIndex]

  useEffect(() => {
    if (!campaigns || campaigns.length === 0) return

    // Her zaman popup'ı aç
    setIsOpen(true)
  }, [campaigns])

  const handleClose = () => {
    // Bir sonraki kampanyaya geç
    if (currentCampaignIndex < campaigns!.length - 1) {
      setCurrentCampaignIndex(prev => prev + 1)
    } else {
      setIsOpen(false)
      setCurrentCampaignIndex(0)
    }
  }

  if (!currentCampaign) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader className="relative">
          
          <DialogTitle className="text-xl font-bold text-center pr-8">
            {currentCampaign.title}
          </DialogTitle>
          
          {currentCampaign.image && (
            <div className="relative w-full h-48 mt-4 rounded-lg overflow-hidden">
              <Image
                src={currentCampaign.image}
                alt={currentCampaign.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          )}
          
          <DialogDescription className="text-center text-base mt-4">
            {currentCampaign.description}
          </DialogDescription>
          
          {currentCampaign.validUntil && (
            <p className="text-sm text-muted-foreground text-center mt-2">
              Geçerlilik: {currentCampaign.validUntil}
            </p>
          )}
        </DialogHeader>
        
        <div className="flex justify-center mt-6">
          <Button 
            variant="outline" 
            onClick={handleClose}
            className="w-full"
          >
            {campaigns && currentCampaignIndex < campaigns.length - 1 ? "Sonraki" : "Kapat"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CampaignPopup