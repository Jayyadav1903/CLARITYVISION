'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    medicalHistory: '',
    consent: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    alert('Thank you for registering as a donor!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Donor Registration</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="medicalHistory">Medical History</Label>
            <Textarea
              id="medicalHistory"
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              rows={4}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={handleConsentChange}
            />
            <Label htmlFor="consent">
              I agree to donate my eyes after death
            </Label>
          </div>
        </div>
        <Button type="submit" className="w-full mt-6">
          Register as Donor
        </Button>
      </form>
    </div>
  )
}

