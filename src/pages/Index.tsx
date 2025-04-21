import { Button } from "@/components/ui/button";
import { Layout } from "@/components/ui/layout";
import { Link } from "react-router-dom";
import { ChevronRight, Users, Shield, User, Leaf, Gavel, BarChart2, Calendar, ArrowDownWideNarrow, Handshake, Layers, BrainCircuit, FileText, Video, Headphones } from "lucide-react";

const topicCards = [
  { 
    title: "Teams", 
    description: "Building and managing effective project teams", 
    icon: Users, 
    href: "/topic/teams" 
  },
  { 
    title: "Risk", 
    description: "Identifying and mitigating project risks", 
    icon: Shield, 
    href: "/topic/risk" 
  },
  { 
    title: "Leadership", 
    description: "Developing project leadership skills", 
    icon: User, 
    href: "/topic/leadership" 
  },
  { 
    title: "Ethics", 
    description: "Ethical considerations in project management", 
    icon: Gavel, 
    href: "/topic/ethics" 
  },
  { 
    title: "Sustainability", 
    description: "Building sustainable project practices", 
    icon: Leaf, 
    href: "/topic/sustainability" 
  },
  { 
    title: "Governance", 
    description: "Project governance frameworks and implementation", 
    icon: BarChart2, 
    href: "/topic/governance" 
  },
  { 
    title: "Strategy", 
    description: "Strategic approaches to project management", 
    icon: BarChart2, 
    href: "/topic/strategy" 
  },
  { 
    title: "Planning", 
    description: "Effective project planning techniques", 
    icon: Calendar, 
    href: "/topic/planning" 
  },
  { 
    title: "Implementation", 
    description: "Successfully implementing project plans", 
    icon: ArrowDownWideNarrow, 
    href: "/topic/implementation" 
  },
  { 
    title: "Stakeholders", 
    description: "Managing stakeholder relationships", 
    icon: Handshake, 
    href: "/topic/stakeholders" 
  },
  { 
    title: "Methodologies", 
    description: "Project management methodologies overview", 
    icon: Layers, 
    href: "/topic/methodologies" 
  },
  { 
    title: "AI", 
    description: "AI applications in project management", 
    icon: BrainCircuit, 
    href: "/topic/ai" 
  },
];

const resourceTypeIcons = {
  text: <FileText className="h-5 w-5" />,
  video: <Video className="h-5 w-5" />,
  audio: <Headphones className="h-5 w-5" />,
};

export default function Index() {
  return (
    <Layout>
      <section className="relative bg-gradient-to-b from-pmblue to-pmblue-dark text-white py-16 md:py-24">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
          alt="Teamwork illustration"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow">
              A Guide to Project Management
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              An accessible, easy-to-use guide for small businesses and charities working in Ireland
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-pmblue hover:bg-gray-100">
                <Link to="/topic/teams">Browse Topics</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>
      
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Helping Organizations Get Stuff Done Better</h2>
          <p className="text-lg text-muted-foreground">
            This guide provides practical resources for small businesses and charities in Ireland to improve their project management capabilities.
          </p>
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=700&q=80"
            alt="People collaborating"
            className="mx-auto rounded-lg mt-8 shadow-lg w-full max-w-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicCards.map((card) => (
            <Link 
              key={card.title} 
              to={card.href}
              className="border rounded-lg p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card"
            >
              <div className="h-12 w-12 rounded-full bg-pmblue/10 text-pmblue flex items-center justify-center mb-4">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">{card.title}</h3>
              <p className="text-muted-foreground mb-4 flex-1">{card.description}</p>
              <div className="flex items-center text-pmblue font-medium">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Resource Types</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Our guide includes a variety of resource formats to suit different learning preferences.
            </p>
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
              alt="Resources illustration"
              className="mx-auto mb-10 rounded-lg w-full max-w-md shadow"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-800 mx-auto flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Written Guides</h3>
                <p className="text-muted-foreground">
                  Comprehensive articles, templates, and checklists for detailed learning.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 rounded-full bg-red-100 text-red-800 mx-auto flex items-center justify-center mb-4">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Video Tutorials</h3>
                <p className="text-muted-foreground">
                  Visual demonstrations and expert interviews for visual learners.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-800 mx-auto flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Audio Resources</h3>
                <p className="text-muted-foreground">
                  Podcasts and audio guides for learning on the go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why This Guide?</h2>
          <p className="text-lg text-muted-foreground">
            Created specifically for Irish small businesses and charities, this guide addresses the unique challenges you face.
          </p>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
            alt="Project management concept"
            className="mx-auto mt-8 rounded-lg shadow w-full max-w-xs"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-3">For Small Businesses</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-pmblue shrink-0 mt-0.5" />
                <span>Practical tools to manage limited resources effectively</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-pmblue shrink-0 mt-0.5" />
                <span>Strategic approaches to compete with larger organizations</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-pmblue shrink-0 mt-0.5" />
                <span>Methods to improve project delivery with small teams</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-pmblue shrink-0 mt-0.5" />
                <span>Guidance on scaling project capabilities as you grow</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-3">For Charities</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-pmblue shrink-0 mt-0.5" />
                <span>Approaches to manage volunteer-driven projects</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-pmblue shrink-0 mt-0.5" />
                <span>Strategies for maximizing impact with limited funding</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-pmblue shrink-0 mt-0.5" />
                <span>Methods for measuring and communicating project outcomes</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-pmblue shrink-0 mt-0.5" />
                <span>Tools for ensuring accountability to donors and stakeholders</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-pmblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to improve your project management?</h2>
          <Button size="lg" asChild className="bg-white text-pmblue hover:bg-gray-100">
            <Link to="/topic/teams">Explore Topics Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
