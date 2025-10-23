import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingCart } from "lucide-react";

const tools = [
  {
    name: "Unreal Engine 5",
    description: "Our primary game engine for building stunning environments and gameplay mechanics",
    logo: "/images/unreal-engine-logo.svg",
    link: "https://www.unrealengine.com/",
    category: "Game Engine"
  },
  {
    name: "Blender",
    description: "3D modeling and animation software for creating characters and assets",
    logo: "https://download.blender.org/branding/blender_logo_socket.png",
    link: "https://www.blender.org/",
    category: "3D Modeling"
  },
  {
    name: "Photoshop",
    description: "Professional image editing for textures, concept art, and marketing materials",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    link: "https://www.adobe.com/products/photoshop.html",
    category: "Design"
  },
  {
    name: "Substance Painter",
    description: "3D painting software for creating realistic textures and materials",
    logo: "https://cdn.worldvectorlogo.com/logos/substance-painter.svg",
    link: "https://www.adobe.com/products/substance3d-painter.html",
    category: "Texturing"
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaboration platform for our development workflow",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://github.com/",
    category: "Development"
  },
  {
    name: "Audacity",
    description: "Open-source audio editing software for sound design and music production",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Audacity_Logo.svg",
    link: "https://www.audacityteam.org/",
    category: "Audio"
  }
];

const affiliateProducts = [
  {
    name: "Game Development Equipment",
    description: "Essential hardware and accessories we use for game development",
    link: "https://amzn.to/42OyVpW",
    category: "Hardware"
  },
  // Add more affiliate products here
];

const Shop = () => {
  return (
    <Layout>
      <SEO 
        title="Shop — Game Development Tools" 
        description="Discover the tools and software we use to create Kip Caper and the Codex Caperis." 
      />
      
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6">
        <header className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-thief-gold to-emerald-glow bg-clip-text text-transparent">
            Behind the Heist
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            The tools and software we use to bring Kip Caper's world to life. From stunning visuals to immersive gameplay, here's what powers our development.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tools.map((tool) => (
            <Card key={tool.name} className="group hover-lift transition-all duration-300 glass-card border-white/10">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center rounded-lg bg-background/50 p-2 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tool.category}
                  </span>
                </div>
                <CardTitle className="text-lg sm:text-xl">{tool.name}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary/10 group-hover:border-primary/30 transition-all"
                >
                  <a 
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Affiliate Products Section */}
        <section className="mt-16 sm:mt-20">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl mb-3 bg-gradient-to-r from-emerald-glow to-thief-gold bg-clip-text text-transparent">
              Recommended Gear
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Support our development by checking out the equipment and products we use. 
              <span className="text-xs block mt-1 opacity-70">As Amazon Associates, we earn from qualifying purchases.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {affiliateProducts.map((product) => (
              <Card key={product.name} className="group hover-lift transition-all duration-300 glass-card border-thief-gold/20 bg-gradient-to-br from-background to-thief-gold/5">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-lg bg-thief-gold/10 group-hover:bg-thief-gold/20 transition-all">
                      <ShoppingCart className="h-6 w-6 sm:h-7 sm:w-7 text-thief-gold" />
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-thief-gold/10 text-thief-gold border border-thief-gold/30">
                      {product.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    asChild 
                    variant="default"
                    size="sm" 
                    className="w-full bg-gradient-to-r from-thief-gold to-emerald-glow hover:opacity-90 transition-all"
                  >
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View on Amazon
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <footer className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
          <div className="glass-card p-6 sm:p-8 rounded-lg border-white/10">
            <h2 className="font-display text-xl sm:text-2xl mb-3 text-thief-gold">
              Want to Create Games?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-4">
              Many of these tools have free versions or educational licenses. Start your game development journey today!
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Shop;
