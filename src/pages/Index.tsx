import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Wifi, WifiOff, Wand2, Check } from "lucide-react";
import { HowItWorks } from "@/components/HowItWorks";

const Index = () => {
  const floatingElements = [
    { emoji: '🖋️', left: '10%', top: '20%', delay: 0 },
    { emoji: '🧪', left: '85%', top: '30%', delay: 0.5 },
    { emoji: '👻', left: '15%', top: '70%', delay: 1 },
    { emoji: '🔮', left: '80%', top: '60%', delay: 1.5 },
    { emoji: '🕷️', left: '5%', top: '50%', delay: 2 },
    { emoji: '🎃', left: '90%', top: '15%', delay: 2.5 }
  ];

  const features = [
    {
      icon: WifiOff,
      title: "Work Anywhere, Anytime",
      description: "Start a drawing session on the train, continue in a cafe, and sync when you're back online. Your team sees all your changes automatically.",
    },
    {
      icon: Sparkles,
      title: "Conflict-Free Collaboration",
      description: "Our enchanted CRDT engine automatically resolves conflicts. No more lost work or 'who changed what' confusion.",
    },
    {
      icon: Wand2,
      title: "Tools That Spark Joy",
      description: "Halloween-themed brushes, magical effects, and collaborative cursors that make every session feel like a creative séance.",
    },
  ];

  const pricingTiers = [
    {
      name: "Apprentice",
      price: "Free Forever",
      features: [
        "3 simultaneous collaborators",
        "10 canvases",
        "Basic Halloween tools",
        "7-day version history",
        "Community support",
      ],
      cta: "Start Drawing",
      popular: false,
    },
    {
      name: "Sorcerer",
      price: "$8/month",
      features: [
        "Unlimited collaborators",
        "Unlimited canvases",
        "Advanced magical tools",
        "30-day version history",
        "Priority support",
        "Custom themes",
      ],
      cta: "Become a Sorcerer",
      popular: true,
    },
    {
      name: "Archmage",
      price: "Custom",
      features: [
        "Self-hosted deployment",
        "SSO & advanced security",
        "Unlimited version history",
        "Dedicated support",
        "Custom MCP integrations",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-hero relative overflow-hidden">{floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl pointer-events-none z-10 opacity-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            opacity: { duration: 3, repeat: Infinity, delay: element.delay },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: element.delay },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: element.delay }
          }}
          style={{ left: element.left, top: element.top }}
        >
          {element.emoji}
        </motion.div>
      ))}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                background: `rgba(255, 107, 53, ${Math.random() * 0.3 + 0.1})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, -200],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl magic-glow relative"
            >
              <motion.span 
                className="inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,107,53,0.3)",
                    "0 0 40px rgba(255,107,53,0.6)",
                    "0 0 20px rgba(255,107,53,0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Collaborative Drawing
              </motion.span>{" "}
              <span className="block mt-2">That Never Drops the Magic</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light"
            >
              Create together in real-time, even when the internet disappears. Coven works flawlessly offline and syncs automatically when you're back online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_0_30px_rgba(255,107,53,0.3)] hover:shadow-[0_0_50px_rgba(255,107,53,0.5)] transform hover:-translate-y-1 transition-all">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center gap-2">
                    Start Drawing Free - No Signup Required
                    <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10 hover:border-accent transition-all">
                  Watch the Magic
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 pt-8 text-sm"
            >
              {[
                "Real-time collaboration that survives internet outages",
                "No more 'waiting for connection' frustrations",
                "Your data stays private and secure - always",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-6 bg-card/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl magic-glow"
              animate={{ 
                textShadow: [
                  "0 0 15px rgba(255,107,53,0.2)",
                  "0 0 30px rgba(255,107,53,0.4)",
                  "0 0 15px rgba(255,107,53,0.2)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Tired of Collaboration Tools That Fail When You Need Them Most?
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Card className="p-6 bg-destructive/10 border-destructive/30">
                <div className="flex items-start gap-3">
                  <WifiOff className="w-6 h-6 text-destructive mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Frustration</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Internet down? So is your team's productivity</li>
                      <li>• Conflicts and lost work when multiple people edit simultaneously</li>
                      <li>• Worried about privacy with cloud-only solutions</li>
                      <li>• Clunky interfaces that kill creative flow</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Card className="p-6 bg-accent/10 border-accent/30">
                <div className="flex items-start gap-3">
                  <Wifi className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Magic</h3>
                    <p className="text-muted-foreground">
                      Coven uses magical CRDT technology to keep your team in sync, even when the internet isn't. Draw, design, and brainstorm together - online, offline, or somewhere in between.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-16 magic-glow"
            animate={{ 
              textShadow: [
                "0 0 15px rgba(255,107,53,0.2)",
                "0 0 30px rgba(255,107,53,0.4)",
                "0 0 15px rgba(255,107,53,0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Core Features
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 h-full bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-all hover:shadow-[0_0_30px_rgba(255,107,53,0.2)] hover:-translate-y-2 group">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-12 h-12 text-accent mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-card/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-16 magic-glow"
            animate={{ 
              textShadow: [
                "0 0 15px rgba(255,107,53,0.2)",
                "0 0 30px rgba(255,107,53,0.4)",
                "0 0 15px rgba(255,107,53,0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Pricing
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Magical
                  </div>
                )}
                <Card className={`p-8 h-full ${tier.popular ? 'border-accent bg-accent/5' : 'bg-card/50'} backdrop-blur`}>
                  <h3 className="text-3xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-4xl font-bold mb-6 text-accent">{tier.price}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${tier.popular ? 'bg-accent hover:bg-accent/90' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    {tier.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl magic-glow"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,107,53,0.3)",
                  "0 0 40px rgba(255,107,53,0.6)",
                  "0 0 20px rgba(255,107,53,0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to Experience Truly Magical Collaboration?
            </motion.h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Join thousands of teams who never worry about internet connections again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_0_40px_rgba(255,107,53,0.4)] hover:shadow-[0_0_60px_rgba(255,107,53,0.6)] transform hover:-translate-y-1 transition-all text-lg px-10">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative">Create Your First Canvas - Free</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10 hover:border-accent transition-all text-lg">
                  Schedule a Demo
                </Button>
              </motion.div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <span>✓ No credit card required</span>
              <span>✓ Set up in 30 seconds</span>
              <span>✓ Privacy-first: We never sell your data</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
