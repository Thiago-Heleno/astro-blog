import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageCircle,
  Clock,
  Award,
  Users,
  Menu,
  ChevronLeft,
  ChevronRight,
  MessageCircleMore,
  Star,
  Briefcase,
  Scale,
  BookOpen,
} from "lucide-react";

export default function EnhancedLawyerLandingPage() {
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);

  const reviews = [
    {
      name: "John Doe",
      role: "CEO",
      comment:
        "A LegalSphere forneceu um serviço excepcional no nosso caso de litígio corporativo. Sua abordagem inovadora nos fez economizar tempo e recursos.",
    },
    {
      name: "Jane Smith",
      role: "Proprietária de Pequeno Negócio",
      comment:
        "Fiquei impressionada com a atenção pessoal e os conselhos especializados que recebi. Eles realmente se importam com seus clientes.",
    },
    {
      name: "Robert Johnson",
      role: "Desenvolvedor Imobiliário",
      comment:
        "A equipe da LegalSphere navegou por leis imobiliárias complexas com facilidade. Recomendo muito os seus serviços.",
    },
  ];

  const nextReviewSlide = () => {
    setCurrentReviewSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevReviewSlide = () => {
    setCurrentReviewSlide(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="flex-grow">
        <section className="py-20 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Justice Reimagined
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Experience legal representation that breaks the mold. Our
              innovative approach ensures your rights are protected with
              precision and creativity.
            </p>
            <Button
              aria-label="Go to our company whatsapp to start talking"
              size="lg"
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              Revolutionize Your Case <MessageCircleMore />
            </Button>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-primary/20 to-transparent rounded-full opacity-50" />
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-indigo-100 to-transparent" />
        </section>

        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 relative z-10">
              Client Testimonials
            </h2>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentReviewSlide * 100}%)`,
                  }}
                >
                  {reviews.map((review, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Card className="h-full bg-gradient-to-br from-white to-gray-100 border-none">
                        <CardHeader>
                          <CardTitle className="text-2xl text-primary">
                            {review.name}
                          </CardTitle>
                          <CardDescription>{review.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 italic">
                            &ldquo;{review.comment}&rdquo;
                          </p>
                          <div className="flex mt-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                aria-label="Move left the carousel"
                variant="outline"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-full p-2"
                onClick={prevReviewSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                aria-label="Move right the carousel"
                variant="outline"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full p-2"
                onClick={nextReviewSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose LegalSphere
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: "Expertise",
                  description:
                    "Our team of specialized lawyers covers a wide range of legal areas.",
                },
                {
                  icon: Scale,
                  title: "Justice-Driven",
                  description:
                    "We're committed to upholding justice and protecting your rights.",
                },
                {
                  icon: BookOpen,
                  title: "Continuous Learning",
                  description:
                    "We stay updated with the latest legal developments to serve you better.",
                },
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <item.icon className="h-12 w-12 mx-auto text-primary" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Our Commitment to Excellence
                </h2>
                <p className="text-gray-600 mb-4">
                  At LegalSphere, we believe that every client deserves
                  exceptional legal representation. Our team of dedicated
                  attorneys brings years of experience and a passion for justice
                  to every case we handle.
                </p>
                <p className="text-gray-600 mb-4">
                  We understand that legal matters can be stressful and complex.
                  That's why we strive to make the process as smooth and
                  transparent as possible, keeping you informed and involved
                  every step of the way.
                </p>
                <p className="text-gray-600">
                  Whether you're facing a personal injury claim, need assistance
                  with business law, or require representation in court,
                  LegalSphere is here to protect your rights and fight for your
                  best interests.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 rounded-3xl transform rotate-3"></div>
                <img
                  src="./favicon.svg"
                  alt="LegalSphere Team"
                  loading="lazy"
                  decoding="auto"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-primary">
                  Connect with LegalSphere Instantly
                </h2>
                <p className="text-lg text-muted-foreground">
                  Get immediate legal assistance through our WhatsApp service.
                  Our team of expert lawyers is ready to provide you with
                  prompt, professional advice.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-primary/10 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center text-primary">
                        <Clock className="mr-2 h-5 w-5" />
                        24/7 Availability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Round-the-clock legal support at your fingertips.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/10 border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center text-secondary">
                        <Award className="mr-2 h-5 w-5" />
                        Expert Advice
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Access to top-tier legal professionals in various
                        fields.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="bg-accent/10 border-accent/20">
                    <CardHeader>
                      <CardTitle className="flex items-center text-accent">
                        <Users className="mr-2 h-5 w-5" />
                        Personalized Care
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Tailored solutions for your unique legal needs.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/10 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center text-primary">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Instant Responses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Quick replies to your pressing legal questions.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 rounded-3xl transform -rotate-3"></div>
                <Card className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/20 overflow-hidden">
                  <CardHeader className="bg-primary/20 pb-2">
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <MessageCircle className="mr-2 h-6 w-6" />
                      WhatsApp Legal Assistance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-6">
                      Our WhatsApp service connects you directly with our legal
                      experts. Whether you need quick advice or want to schedule
                      a consultation, we're here to help.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span>Typical response time: Under 5 minutes</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-secondary mr-2" />
                        <span>Over 10,000 clients served</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-accent mr-2" />
                        <span>98% client satisfaction rate</span>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button
                        aria-label="Message us now on whatsapp"
                        className="w-full text-lg py-6 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Start WhatsApp Chat Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
