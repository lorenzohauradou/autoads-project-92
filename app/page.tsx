'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Zap, Battery, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">Monopattinoo</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                E-Scooters
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Accessories
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Support
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Product Section */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/0cd94c2d-cfbe-4f02-860b-954b7fa362a8.jpg?"
                                    alt="Monopattinoo Electric Scooter - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/579f930a-ed55-49dc-8c2d-27eb3508ba50.jpg?"
                                        alt="Monopattinoo Electric Scooter - Side View"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/80ade535-68c9-42c2-a029-a72958285fa3.jpg?"
                                        alt="Monopattinoo Electric Scooter - Detail View"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/a9e6aa30-d4f1-4c16-9289-c4836145718c.jpg?"
                                        alt="Monopattinoo Electric Scooter - Folded View"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/9a9bee43-e9c3-4cc6-a11e-dc25cedde8dd.jpg?"
                                        alt="Monopattinoo Electric Scooter - Display View"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="text-xs font-medium">
                                    🚀 Next-Gen Mobility
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                                    Monopattinoo Electric Scooter
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(1,847 reviews)</span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Experience urban freedom with 60km range and smart energy recovery. Transform your daily commute into an effortless journey.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$899</span>
                                    <span className="text-xl text-slate-500 line-through">$1,299</span>
                                    <Badge variant="destructive" className="text-sm font-semibold">
                                        31% OFF
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                    <Gauge className="h-5 w-5 text-slate-700" />
                                    <span className="font-medium text-sm">60km Range</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                    <Battery className="h-5 w-5 text-slate-700" />
                                    <span className="font-medium text-sm">477.36Wh Battery</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                    <Zap className="h-5 w-5 text-slate-700" />
                                    <span className="font-medium text-sm">15% Energy Recovery</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                    <Shield className="h-5 w-5 text-slate-700" />
                                    <span className="font-medium text-sm">25 km/h Max Speed</span>
                                </div>
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-slate-700">Quantity:</span>
                                    <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        Add to Cart - $899
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2">
                                        Buy Now - Fast Checkout
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-slate-500">Express delivery</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-slate-500">Hassle-free</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">2-Year Warranty</p>
                                        <p className="text-xs text-slate-500">Full coverage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-white rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium">
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Why Choose Monopattinoo?</h3>
                                        <div className="space-y-5">
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Industry-Leading Range</h4>
                                                    <p className="text-slate-600 leading-relaxed">60km maximum range powered by advanced 477.36Wh lithium battery</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Smart Energy Recovery</h4>
                                                    <p className="text-slate-600 leading-relaxed">15% power regeneration system for extended riding efficiency</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Versatile Performance</h4>
                                                    <p className="text-slate-600 leading-relaxed">Three-speed settings for optimal control in any urban environment</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Premium Build Quality</h4>
                                                    <p className="text-slate-600 leading-relaxed">Robust construction with high-grade materials and sleek design</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/579f930a-ed55-49dc-8c2d-27eb3508ba50.jpg?"
                                            alt="Monopattinoo Electric Scooter features demonstration"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-0">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">Range</span>
                                                <span className="font-semibold text-slate-900">Up to 60km</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">Battery</span>
                                                <span className="font-semibold text-slate-900">477.36Wh Lithium</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">Max Speed</span>
                                                <span className="font-semibold text-slate-900">25 km/h</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">Speed Settings</span>
                                                <span className="font-semibold text-slate-900">3 Modes</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">Energy Recovery</span>
                                                <span className="font-semibold text-slate-900">15% Regeneration</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">Charging Time</span>
                                                <span className="font-semibold text-slate-900">4-6 hours</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">Weight</span>
                                                <span className="font-semibold text-slate-900">12.5 kg</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3">
                                                <span className="text-slate-600 font-medium">Warranty</span>
                                                <span className="font-semibold text-slate-900">2 years</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">What's in the Box</h3>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-slate-700">1x Monopattinoo Electric Scooter</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-slate-700">1x Charger Adapter</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-slate-700">1x Maintenance Tool Kit</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-slate-700">1x User Manual</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-slate-700">1x Warranty Card</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Based on 1,847 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            <div className="flex items-center gap-4">
                                                <span className="text-sm font-medium w-8">5★</span>
                                                <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                    <div className="bg-yellow-400 h-3 rounded-full transition-all duration-300" style={{ width: "85%" }} />
                                                </div>
                                                <span className="text-sm text-slate-600 font-medium w-16 text-right">1,570</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-sm font-medium w-8">4★</span>
                                                <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                    <div className="bg-yellow-400 h-3 rounded-full transition-all duration-300" style={{ width: "10%" }} />
                                                </div>
                                                <span className="text-sm text-slate-600 font-medium w-16 text-right">185</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-sm font-medium w-8">3★</span>
                                                <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                    <div className="bg-yellow-400 h-3 rounded-full transition-all duration-300" style={{ width: "5%" }} />
                                                </div>
                                                <span className="text-sm text-slate-600 font-medium w-16 text-right">92</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-6">
                                                <div className="flex items-start gap-4">
                                                    <Avatar className="h-12 w-12">
                                                        <Image
                                                            src="/placeholder-user.jpg"
                                                            alt="User"
                                                            width={48}
                                                            height={48}
                                                            className="rounded-full"
                                                        />
                                                        <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">JD</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="flex items-center gap-3 flex-wrap">
                                                            <span className="font-semibold text-slate-900">James Davidson</span>
                                                            <div className="flex">
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                                ))}
                                                            </div>
                                                            <span className="text-sm text-slate-500">3 days ago</span>
                                                        </div>
                                                        <h4 className="font-semibold text-slate-900">Game changer for my commute!</h4>
                                                        <p className="text-slate-600 leading-relaxed">The 60km range is real - I only charge it twice a week. The energy recovery feature is brilliant, especially on downhill sections.</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-6">
                                                <div className="flex items-start gap-4">
                                                    <Avatar className="h-12 w-12">
                                                        <Image
                                                            src="/placeholder-user.jpg"
                                                            alt="User"
                                                            width={48}
                                                            height={48}
                                                            className="rounded-full"
                                                        />
                                                        <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">SL</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="flex items-center gap-3 flex-wrap">
                                                            <span className="font-semibold text-slate-900">Sophie Laurent</span>
                                                            <div className="flex">
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                                ))}
                                                            </div>
                                                            <span className="text-sm text-slate-500">1 week ago</span>
                                                        </div>
                                                        <h4 className="font-semibold text-slate-900">Worth every penny</h4>
                                                        <p className="text-slate-600 leading-relaxed">Solid build quality and the three speed modes are perfect for different situations. Customer service was excellent too!</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-6">
                                                <div className="flex items-start gap-4">
                                                    <Avatar className="h-12 w-12">
                                                        <Image
                                                            src="/placeholder-user.jpg"
                                                            alt="User"
                                                            width={48}
                                                            height={48}
                                                            className="rounded-full"
                                                        />
                                                        <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">MK</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="flex items-center gap-3 flex-wrap">
                                                            <span className="font-semibold text-slate-900">Marcus Kim</span>
                                                            <div className="flex">
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                                ))}
                                                            </div>
                                                            <span className="text-sm text-slate-500">2 weeks ago</span>
                                                        </div>
                                                        <h4 className="font-semibold text-slate-900">Best e-scooter I've owned</h4>
                                                        <p className="text-slate-600 leading-relaxed">The battery life is incredible. I use it daily for my 15km commute and still have plenty of charge left.</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        <AccordionItem value="item-0" className="bg-white rounded-xl px-6 shadow-sm border-0">
                                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                How long does the battery really last?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                The 477.36Wh battery provides up to 60km range under optimal conditions. Real-world range depends on factors like rider weight, terrain, and speed mode used. Most users report 45-55km in mixed conditions.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-1" className="bg-white rounded-xl px-6 shadow-sm border-0">
                                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                What is the energy recovery system?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                The smart energy recovery system captures and converts kinetic energy during braking and downhill riding, returning up to 15% power back to the battery. This significantly extends your riding range.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2" className="bg-white rounded-xl px-6 shadow-sm border-0">
                                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                Is it suitable for daily commuting?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                Absolutely! With its 60km range, comfortable 25 km/h max speed, and three-speed settings, it's perfect for daily urban commuting. The robust build quality ensures reliability for everyday use.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3" className="bg-white rounded-xl px-6 shadow-sm border-0">
                                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                What's included with the scooter?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                Your purchase includes the Monopattinoo electric scooter, charger adapter, maintenance tool kit, user manual, and warranty card. Everything you need to start riding immediately.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-4" className="bg-white rounded-xl px-6 shadow-sm border-0">
                                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                How does the warranty work?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                We offer a comprehensive 2-year warranty covering manufacturing defects. Our customer service team is available to help with any issues, and we maintain service centers in major cities.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12 text-center lg:text-left">
                            Complete Your Setup
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl mb-4 overflow-hidden">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/80ade535-68c9-42c2-a029-a72958285fa3.jpg?"
                                            alt="Protective Helmet"
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">Safety Helmet</h3>
                                    <p className="text-lg font-bold text-slate-900">$49.99</p>
                                </CardContent>
                            </Card>
                            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl mb-4 overflow-hidden">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/9a9bee43-e9c3-4cc6-a11e-dc25cedde8dd.jpg?"
                                            alt="Phone Mount"
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">Phone Mount</h3>
                                    <p className="text-lg font-bold text-slate-900">$24.99</p>
                                </CardContent>
                            </Card>
                            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl mb-4 overflow-hidden">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/a9e6aa30-d4f1-4c16-9289-c4836145718c.jpg?"
                                            alt="Storage Bag"
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">Storage Bag</h3>
                                    <p className="text-lg font-bold text-slate-900">$34.99</p>
                                </CardContent>
                            </Card>
                            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl mb-4 overflow-hidden">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/579f930a-ed55-49dc-8c2d-27eb3508ba50.jpg?"
                                            alt="Lock & Chain"
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">Security Lock</h3>
                                    <p className="text-lg font-bold text-slate-900">$39.99</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simplified Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">Monopattinoo</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 Monopattinoo. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}