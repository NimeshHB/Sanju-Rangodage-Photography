"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimatedCounter from "@/components/animated-counter"
import BackgroundAnimation from "@/components/background-animation"
import {
  Camera,
  Play,
  User,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Award,
  Trophy,
  Star,
} from "lucide-react"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/503356049_4118209801783735_2182748535855069890_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEEDrkJyhtfAzO_Mrz-AjHqKfOsyjIfTxIp86zKMh9PEkgemIKeG6pq8uk-Fq-OgZdV8vwNCcYcd1vdrUEVZPEr&_nc_ohc=yARNVT7ZPeIQ7kNvwHq55by&_nc_oc=AdmS_9gsWJhGoU0-AhFLs-JO30frTnKen7jLxFw-eOx2CYBKUEpazbMkGSGT-E7tfuw&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=r4CJFuxK7GSWOEO7kfM9Ug&oh=00_AfUibuldKmzdVdzega4dENiYoaoppkwVVzXYsoqtnbpMww&oe=68A041A5",
    "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/503345462_4118603208411061_1486811133982717766_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHWzcdb7DMS3tLvYr7YESm0_CqROopIhi78KpE6ikiGLnpqeDfaEAq18_1Mtl6hyn2qBSgAtTSb3wjR0K0EA4BT&_nc_ohc=knQr2aoexwMQ7kNvwFl7Y-U&_nc_oc=AdnNkDRr1kPbbRkOwl3NZgHpStZa9SnoBrOl6pcfqvcgE01c_WwAoOL7gM1C57Ltw0c&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=FZEruOgGBJdkOh0l4vc1Fw&oh=00_AfX9obsFPk82ynQiBU6Amyh6sCgY54OqP-qEE7UEeUjjog&oe=68A025D6",
    "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/502669889_4117813338490048_3985131960058778518_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHmlCNjtmeHXh3chznd45Lcx6E4hqMXRk_HoTiGoxdGT1rFDbCHNiniku0M8m68AvsHXiSlS2c8F_-963KW_A-R&_nc_ohc=guTWy84q5E4Q7kNvwElPk6D&_nc_oc=AdlJwDMBlobmxxtthWWalhxFDoVvoAS9SWiwtGTVz7hfH7QVrAliDT5Uq-bgorPya6w&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=qoObDebHWGeTKB0oT_bAuA&oh=00_AfW2gxeqom8rRthtdHGI9r28EhVWyWwwgWk74gxH-8hyRA&oe=68A04D31",
    "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/502859976_4117720658499316_8860651174046201567_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHnem73ToEQPj46FtJm8BG0rhYs45jmp3OuFizjmOanc0kK-EqgOt3mH3U4rIEW0pHGy4HyGFwTjuxGB3vApuoG&_nc_ohc=mHnk0WzxPNIQ7kNvwHz82Pt&_nc_oc=Adl6XKia6PSXk7ae6RysGHvpfqHcwsITQ1iJUYoDkKGVU-VUo5-cCWLSUkZoDKgLSz8&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=wOCcXXD8cOk3jODXvoIsIA&oh=00_AfVm4AN3e7kD9K6Oe4QqZW3SP33LyjaqFq0eQx5681_sbA&oe=68A04702",
    "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/486526886_4047930142145035_801073366554672423_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFGqFWIwTNLsR7NoUpetIlEP26dPOQOCf0_bp085A4J_dnCGev7w8HFLT1I-EDzLrUCITpE5v7iBojlnZMIQWRS&_nc_ohc=YLiF20r6GkwQ7kNvwF9Z-fv&_nc_oc=AdljhbFN4FZG_i_yKbLetJHRAepM9HlQzdKAe9ZtETq2MxA1LgTNdshbOD5G_mgBFoM&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=kRc1OPtJJgcRG6JanuqnBw&oh=00_AfVUA1J78cP3LtnHCCv_Q-Q-KOu_WnC_4Sgtg_QotngXTQ&oe=68A03DCC",
    "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/485798516_4045797329024983_2735486932092795384_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGxWUdWXI2CyoL-n5p4xfS_9VxLycCYZ9D1XEvJwJhn0IpWRglCw5dwljHndjT0H__eDm0r91ssRDYeoFmaOx5Y&_nc_ohc=GSlGS7YjdvsQ7kNvwGtqnDq&_nc_oc=AdmOoL2ivE-N2wBZgXSepCL_8SCvPa9E_nJauchw9CNwQ26-W3q4eG8XW9wSKJYADlc&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=dp3OBiFUhwB0JbzIoHgl-g&oh=00_AfXHkV4zFZ7xzQI4iq3xtahbJLIGzAXRDfmuxUklmluFqQ&oe=68A02E94",
    "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/485179261_4043069005964482_1877960299555970190_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHRix6XlJRpLkKJcl4LjtzKDOVNlst5YJgM5U2Wy3lgmMTdNPwbl36w9YkD-5rKDxHA3q4yJFR3_QVgZFoKqTmY&_nc_ohc=2CzP5FBUfMwQ7kNvwF1seBs&_nc_oc=AdlJOmF_6G3Vd_C6SiurMiTUmDHe3ypfsgMiRyB9xRgzqgaO2LyRhzt7-fmRMjf22Rs&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=xsKLV-u_37Ia8GMkncTBMw&oh=00_AfWo3ahzRuX5GS4VxpJ_lYnQWn5PaWbeaBZGq1ZaAZ4Z6w&oe=68A0576F",
    "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/507214374_4131515843786464_7641359661871061836_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEjCEO8ipYXauQjaXC-FdrWwb8XAzyLWbPBvxcDPItZs4y0A6TK4Hy6hwLjhJaKaI0vPvCd7OywuFULOheIJijA&_nc_ohc=9okxwNV33d8Q7kNvwGB8OwK&_nc_oc=AdnKlB9wCLWE4QJ0uDzEtDXU-b_W19EGKuIk1DsOJzqma0N--dB0eSLta_5QeoMX6MU&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=KOoxO8rpJPV94G5MQCg0vQ&oh=00_AfXwgJjixu-6mnZihRQqBdqvcO4hTwlfkeeEWYzzGYdg_Q&oe=68A02723",
    "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/502531671_4117868121817903_3211315398978895376_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHNyEB1lTGgSZWZre95BU03lYnmiSbFIKmVieaJJsUgqR-0kx51cYbA9ZBR_SoNAPtuZhhe2KozRaOHiSnBOB8R&_nc_ohc=NooTvurmwNUQ7kNvwHIm9jV&_nc_oc=AdkLBjC9LXoUuLLaZKt2gcYwLvZBDNoi30S4XFpvzcRc14scnpJYa8dzem6m1V80Jtk&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=ckOLssoDF5hqP83DJrxGaA&oh=00_AfVAFNLdMBGUQVWwlWA9Tvvt-l_XhVXkg_u1tFt-cPAeOA&oe=68A03FA4",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Animation */}
      <BackgroundAnimation />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-blue-950/30 border-b border-blue-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Sanju Rangodage Photography</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-blue-200 hover:text-white transition-colors">
                Home
              </a>
              <a href="#gallery" className="text-blue-200 hover:text-white transition-colors">
                Gallery
              </a>
              <a href="#videos" className="text-blue-200 hover:text-white transition-colors">
                Videos
              </a>
              <a href="#about" className="text-blue-200 hover:text-white transition-colors">
                About
              </a>
              <a href="#awards" className="text-blue-200 hover:text-white transition-colors">
                Awards
              </a>
              <a href="#contact" className="text-blue-200 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-blue-950/20 rounded-3xl border border-blue-400/20 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photographer Image - Left Side */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="Sanju Rangodage - Professional Photographer"
                    className="relative w-full h-[500px] lg:h-[600px] object-cover rounded-2xl border border-blue-400/30"
                  />
                </div>
              </div>

              {/* Hero Content - Right Side */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Capturing Life's
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Beautiful Moments
                  </span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                  Professional photography services specializing in weddings, portraits, events, and commercial
                  photography. Every frame tells a story, every moment becomes eternal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-0"
                  >
                    View Portfolio
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-400/50 text-blue-200 hover:bg-blue-500/20 bg-transparent"
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Gallery</h2>
            <p className="text-blue-200 text-lg">A collection of my finest work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="group cursor-pointer backdrop-blur-md bg-blue-950/20 border-blue-400/20 overflow-hidden hover:bg-blue-900/30 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      onClick={() => setSelectedImage(image)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section id="videos" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Behind the Lens</h2>
            <p className="text-blue-200 text-lg">Watch my latest photography videos and tutorials</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card 
              className="backdrop-blur-md bg-blue-950/20 border-blue-400/20 overflow-hidden cursor-pointer hover:bg-blue-900/30 transition-all duration-300"
              onClick={() => window.open('https://www.youtube.com/watch?v=ys6Mb13Tung', '_blank')}
            >
              <CardContent className="p-6">
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden group">
                  <img
                    src="https://img.youtube.com/vi/ys6Mb13Tung/maxresdefault.jpg"
                    alt="Wedding Photography Tips Video Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600/90 hover:bg-red-600 rounded-full p-4 transition-all duration-300 group-hover:scale-110">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Wedding Photography Tips</h3>
                <p className="text-blue-200">Learn the secrets behind capturing perfect wedding moments</p>
              </CardContent>
            </Card>

            <Card 
              className="backdrop-blur-md bg-blue-950/20 border-blue-400/20 overflow-hidden cursor-pointer hover:bg-blue-900/30 transition-all duration-300"
              onClick={() => window.open('https://www.youtube.com/watch?v=HaGBLqEPnmU', '_blank')}
            >
              <CardContent className="p-6">
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden group">
                  <img
                    src="https://img.youtube.com/vi/HaGBLqEPnmU/maxresdefault.jpg"
                    alt="Portrait Lighting Techniques Video Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600/90 hover:bg-red-600 rounded-full p-4 transition-all duration-300 group-hover:scale-110">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Portrait Lighting Techniques</h3>
                <p className="text-blue-200">Master the art of portrait photography with professional lighting</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.open('https://www.youtube.com/channel/UCwReEdZo6FVgoQTXSd3y_8w', '_blank')}
            >
              <Youtube className="h-5 w-5 mr-2" />
              Visit My YouTube Channel
            </Button>
          </div>
        </div>
      </section>

      {/* Awards and Certificates Section */}
      <section id="awards" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Awards & Certificates</h2>
            <p className="text-blue-200 text-lg">Recognition for excellence in photography</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Award 1 */}
            <Card className="backdrop-blur-md bg-blue-950/20 border-blue-400/20 hover:bg-blue-900/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                    <Award className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Best Wedding Photographer 2023</h3>
                <p className="text-blue-200 mb-3">Sri Lanka Photography Awards</p>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-blue-300">
                  Recognized for outstanding creativity and technical excellence in wedding photography
                </p>
              </CardContent>
            </Card>

            {/* Award 2 */}
            <Card className="backdrop-blur-md bg-blue-950/20 border-blue-400/20 hover:bg-blue-900/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Trophy className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                    <Award className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Portrait Excellence Award</h3>
                <p className="text-blue-200 mb-3">International Photography Society</p>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-blue-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-blue-300">
                  Awarded for exceptional portrait photography and innovative lighting techniques
                </p>
              </CardContent>
            </Card>

            {/* Certificate 1 */}
            <Card className="backdrop-blur-md bg-blue-950/20 border-blue-400/20 hover:bg-blue-900/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                    <Award className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Professional Photography Certificate</h3>
                <p className="text-blue-200 mb-3">Canon Academy</p>
                <div className="flex justify-center mb-3">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Certified</span>
                </div>
                <p className="text-sm text-blue-300">
                  Advanced certification in professional photography techniques and equipment mastery
                </p>
              </CardContent>
            </Card>

            {/* Award 3 */}
            <Card className="backdrop-blur-md bg-blue-950/20 border-blue-400/20 hover:bg-blue-900/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Trophy className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                    <Award className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Creative Vision Award 2022</h3>
                <p className="text-blue-200 mb-3">Asia Pacific Photography Contest</p>
                <div className="flex justify-center mb-3">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-purple-400 fill-current" />
                  ))}
                  <Star className="h-4 w-4 text-purple-400/30" />
                </div>
                <p className="text-sm text-blue-300">
                  Honored for innovative artistic approach and unique visual storytelling
                </p>
              </CardContent>
            </Card>

            {/* Certificate 2 */}
            <Card className="backdrop-blur-md bg-blue-950/20 border-blue-400/20 hover:bg-blue-900/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-400/20 to-blue-500/20 rounded-full flex items-center justify-center border border-indigo-400/30">
                    <Award className="h-8 w-8 text-indigo-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Digital Photography Mastery</h3>
                <p className="text-blue-200 mb-3">Adobe Certified Expert</p>
                <div className="flex justify-center mb-3">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">Expert Level</span>
                </div>
                <p className="text-sm text-blue-300">
                  Expert certification in Adobe Creative Suite and advanced digital photography workflows
                </p>
              </CardContent>
            </Card>

            {/* Award 4 */}
            <Card className="backdrop-blur-md bg-blue-950/20 border-blue-400/20 hover:bg-blue-900/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Trophy className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400/20 to-teal-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                    <Award className="h-8 w-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Commercial Photography Excellence</h3>
                <p className="text-blue-200 mb-3">Business Photography Awards</p>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-blue-300">
                  Outstanding achievement in commercial and corporate photography projects
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Achievement Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center backdrop-blur-md bg-blue-950/20 rounded-2xl border border-blue-400/20 p-6">
              <AnimatedCounter 
                value={15} 
                suffix="+" 
                className="text-3xl font-bold text-blue-400 mb-2"
              />
              <div className="text-blue-200">Awards Won</div>
            </div>
            <div className="text-center backdrop-blur-md bg-blue-950/20 rounded-2xl border border-blue-400/20 p-6">
              <AnimatedCounter 
                value={8} 
                suffix="+" 
                className="text-3xl font-bold text-cyan-400 mb-2"
              />
              <div className="text-blue-200">Certifications</div>
            </div>
            <div className="text-center backdrop-blur-md bg-blue-950/20 rounded-2xl border border-blue-400/20 p-6">
              <AnimatedCounter 
                value={500} 
                suffix="+" 
                className="text-3xl font-bold text-purple-400 mb-2"
              />
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center backdrop-blur-md bg-blue-950/20 rounded-2xl border border-blue-400/20 p-6">
              <AnimatedCounter 
                value={8} 
                className="text-3xl font-bold text-green-400 mb-2"
              />
              <div className="text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="backdrop-blur-md bg-blue-950/20 rounded-3xl border border-blue-400/20 p-8">
              <div className="flex items-center mb-6">
                <User className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-4xl font-bold text-white">About Me</h2>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Hello! I'm Sanju Rangodage, a passionate photographer with over 8 years of experience capturing life's
                most precious moments. My journey began with a simple love for storytelling through images, and has
                evolved into a professional career dedicated to creating timeless memories.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                I specialize in wedding photography, portrait sessions, commercial work, and event coverage. My approach
                combines technical expertise with artistic vision to deliver photographs that not only look beautiful
                but also evoke genuine emotions.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">Wedding Photography</span>
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Portraits</span>
                <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Commercial</span>
                <span className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm">Events</span>
              </div>
            </div>

            <div className="backdrop-blur-md bg-blue-950/20 rounded-3xl border border-blue-400/20 p-2">
              <img
                src="https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/275370088_3213569292247795_833685355745392810_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2p_r6MWks7scXSwf87A1ikqDaKF4UOKCSoNooXhQ4oL-2OFTCUgHTGE2ctQ00qi79BYADH6U140zscDz8hw-l&_nc_ohc=n2AF0DKzL3wQ7kNvwGjPuKu&_nc_oc=Adn0-T1kpm6qDkZyBhidCSs28WLUhubtI4ff1S15M0diArZNcQ2_AuaPBDu_mvmV8mo&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=o7gbfzAo3Ptae5tmzUIttw&oh=00_AfW2eoNXIID2pNvBfv-LwXn6O98ZpeU1iMIRJhusgBBMyw&oe=68A034E7"
                alt="Sanju Rangodage"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-blue-200 text-lg">Ready to capture your special moments? Let's talk!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="backdrop-blur-md bg-blue-950/20 border-blue-400/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-blue-950/30 border-blue-400/30 text-white placeholder:text-blue-300"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-blue-950/30 border-blue-400/30 text-white placeholder:text-blue-300"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="bg-blue-950/30 border-blue-400/30 text-white placeholder:text-blue-300"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-blue-950/30 border-blue-400/30 text-white placeholder:text-blue-300"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="backdrop-blur-md bg-blue-950/20 border-blue-400/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-blue-400 mr-3" />
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <p className="text-blue-200">+94 77 123 4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-blue-950/20 border-blue-400/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-cyan-400 mr-3" />
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-blue-200">sanju@rangodagephotography.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-blue-950/20 border-blue-400/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-indigo-400 mr-3" />
                    <div>
                      <h4 className="text-white font-semibold">Location</h4>
                      <p className="text-blue-200">Colombo, Sri Lanka</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-blue-950/20 border-blue-400/20">
                <CardContent className="p-6">
                  <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-400/50 text-blue-200 hover:bg-blue-500/20 bg-transparent"
                    >
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-400/50 text-blue-200 hover:bg-blue-500/20 bg-transparent"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-400/50 text-blue-200 hover:bg-blue-500/20 bg-transparent"
                      onClick={() => window.open('https://www.youtube.com/channel/UCwReEdZo6FVgoQTXSd3y_8w', '_blank')}
                    >
                      <Youtube className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-blue-400/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-300">© 2025 Sanju Rangodage Photography. All rights reserved.</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4 border-blue-400/50 text-blue-200 hover:bg-blue-500/20 bg-transparent"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
