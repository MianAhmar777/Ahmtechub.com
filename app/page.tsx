import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  BookOpen,
  GraduationCap,
  MessageCircle,
  Star,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Mail,
  Facebook,
  Phone,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-strong">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary animate-pulse">AhmTec Hub</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#work" className="text-foreground hover:text-primary transition-colors">
                Work
              </a>
              <a href="#education" className="text-foreground hover:text-primary transition-colors">
                Education
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 opacity-10 animate-bounce">
            <img src="/programming-code-icon.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute top-40 right-20 w-16 h-16 opacity-10 animate-pulse">
            <img src="/web-development-icon.png" alt="" className="w-full h-full" />
          </div>
          <div
            className="absolute bottom-40 left-20 w-24 h-24 opacity-10 animate-spin"
            style={{ animationDuration: "10s" }}
          >
            <img src="/education-book-icon.png" alt="" className="w-full h-full" />
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 glass animate-fade-in">
              <Zap className="w-4 h-4 mr-2" />
              Professional Tech Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-fade-in-up">
              Transform Your Business with
              <span className="text-primary"> Cutting-Edge Technology</span>
            </h1>
            <p
              className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We deliver exceptional web development, mobile applications, e-commerce solutions, and digital marketing
              services that drive real results for your business.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 glass bg-transparent hover:scale-105 transition-transform"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-12 h-12 opacity-5 animate-float">
            <img src="/programming-laptop-icon.png" alt="" className="w-full h-full" />
          </div>
          <div
            className="absolute bottom-20 left-10 w-16 h-16 opacity-5 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <img src="/mobile-app-development-icon.png" alt="" className="w-full h-full" />
          </div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass rounded-xl hover:glass-strong transition-all duration-300 group hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:rotate-6">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Custom websites and web applications built with modern technologies for optimal performance and user
                  experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass rounded-xl hover:glass-strong transition-all duration-300 group hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:rotate-6">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Mobile Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Native and cross-platform mobile applications that engage users and drive business growth across all
                  devices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass rounded-xl hover:glass-strong transition-all duration-300 group hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:rotate-6">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">E-Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Complete e-commerce solutions with secure payment processing, inventory management, and conversion
                  optimization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass rounded-xl hover:glass-strong transition-all duration-300 group hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:rotate-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Strategic digital marketing campaigns that increase visibility, drive traffic, and convert visitors
                  into customers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Selected <span className="text-primary">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Showcasing our latest projects and successful client collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass rounded-xl overflow-hidden hover:glass-strong transition-all duration-300 group hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <Globe className="w-16 h-16 text-primary/60 group-hover:scale-110 transition-transform" />
                <img
                  src="/e-commerce-website-mockup.png"
                  alt="E-commerce Platform"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">E-Commerce Platform</CardTitle>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-muted-foreground ml-1">5.0</span>
                  </div>
                </div>
                <CardDescription>Modern online store with advanced features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built a comprehensive e-commerce solution with real-time inventory, secure payments, and analytics
                  dashboard.
                </p>
              </CardContent>
            </Card>

            <Card className="glass rounded-xl overflow-hidden hover:glass-strong transition-all duration-300 group hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center relative overflow-hidden">
                <Smartphone className="w-16 h-16 text-primary/60 group-hover:scale-110 transition-transform" />
                <img
                  src="/mobile-banking-app.png"
                  alt="Mobile Banking App"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Mobile Banking App</CardTitle>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-muted-foreground ml-1">4.9</span>
                  </div>
                </div>
                <CardDescription>Secure financial application with biometric auth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                  <Badge variant="secondary">Biometrics</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Developed a secure mobile banking app with advanced security features and intuitive user interface.
                </p>
              </CardContent>
            </Card>

            <Card className="glass rounded-xl overflow-hidden hover:glass-strong transition-all duration-300 group hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                <Shield className="w-16 h-16 text-primary/60 group-hover:scale-110 transition-transform" />
                <img
                  src="/analytics-dashboard.png"
                  alt="SaaS Dashboard"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">SaaS Dashboard</CardTitle>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-muted-foreground ml-1">5.0</span>
                  </div>
                </div>
                <CardDescription>Analytics platform with real-time insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Charts</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Created a powerful analytics dashboard with real-time data visualization and comprehensive reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-5 w-14 h-14 opacity-5 animate-bounce">
            <img src="/quran-book-icon.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute bottom-10 right-5 w-18 h-18 opacity-5 animate-pulse">
            <img src="/graduation-cap-education-icon.png" alt="" className="w-full h-full" />
          </div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              <span className="text-primary">Education</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive learning programs for spiritual and academic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass rounded-xl hover:glass-strong transition-all duration-300 group hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:rotate-3">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Quran Studies</CardTitle>
                <CardDescription className="text-lg">
                  Comprehensive Quranic education and memorization programs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Tajweed and proper recitation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Memorization (Hifz) programs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Translation and understanding</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Flexible scheduling options</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass rounded-xl hover:glass-strong transition-all duration-300 group hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:rotate-3">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Academic Tuition</CardTitle>
                <CardDescription className="text-lg">Personalized tutoring for academic excellence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Mathematics and Sciences</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Language Arts and Literature</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Test preparation and study skills</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">One-on-one and group sessions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to transform your business? Get in touch and let's discuss your project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="glass-strong rounded-xl hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <MessageCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">WhatsApp Chat</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Get instant responses and quick consultations via WhatsApp
                  </p>
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-green-500 hover:bg-green-600 text-white w-full"
                    asChild
                  >
                    <a
                      href="https://wa.me/19453821456?text=Hi%20AhmTec%20Hub,%20I'm%20interested%20in%20your%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat Now: +1 (945) 382-1456
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-strong rounded-xl hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Mail className="w-10 h-10 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Email Us</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Send detailed project requirements and get comprehensive proposals
                  </p>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full bg-transparent" asChild>
                    <a href="mailto:ahmtec777@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      ahmtec777@gmail.com
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="glass rounded-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6">Follow Us on Social Media</h3>
                <div className="flex justify-center space-x-6">
                  <Button size="lg" variant="outline" className="px-6 py-4 bg-transparent" asChild>
                    <a
                      href="https://www.facebook.com/profile.php?id=61560347996324"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Facebook className="w-6 h-6 mr-2 text-blue-600" />
                      Facebook
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="px-6 py-4 bg-transparent" asChild>
                    <a href="tel:+19453821456" className="flex items-center">
                      <Phone className="w-6 h-6 mr-2 text-green-600" />
                      Call Us
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">Available 24/7 for consultations and support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/20">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-4">AhmTec Hub</div>
            <p className="text-muted-foreground mb-6">
              Transforming businesses through innovative technology solutions
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 AhmTec Hub</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
