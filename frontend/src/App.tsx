import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Banking App</CardTitle>
          <CardDescription className="text-center">
            Welcome to your modern banking application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button className="w-full" onClick={() => setCount((count) => count + 1)}>
            Login (Clicked {count} times)
          </Button>
          <div className="text-center text-sm text-gray-600">
            Built with React + Vite + shadcn/ui + Tailwind CSS v4
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
