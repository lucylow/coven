import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WifiOff, Wifi, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Draw Offline",
      description: "User 1 creates a drawing while offline. All changes are saved locally.",
      icon: WifiOff,
      users: [{ name: "User 1", status: "offline" }],
    },
    {
      title: "Collaborate in Real-Time",
      description: "User 2 works online simultaneously. Both create without conflicts.",
      icon: Wifi,
      users: [
        { name: "User 1", status: "offline" },
        { name: "User 2", status: "online" },
      ],
    },
    {
      title: "Sync & Merge",
      description: "When User 1 reconnects, changes merge automatically. No conflicts, no lost work.",
      icon: CheckCircle,
      users: [
        { name: "User 1", status: "online" },
        { name: "User 2", status: "online" },
      ],
      synced: true,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl magic-glow">
            See the Magic in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how Coven keeps your team in sync, even when the internet doesn't.
          </p>
        </motion.div>

        {/* Step Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {steps.map((step, index) => (
            <Button
              key={index}
              variant={activeStep === index ? "default" : "outline"}
              className={activeStep === index ? "bg-accent hover:bg-accent/90" : ""}
              onClick={() => setActiveStep(index)}
            >
              <step.icon className="w-4 h-4 mr-2" />
              Step {index + 1}: {step.title}
            </Button>
          ))}
        </div>

        {/* Demo Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Canvas Visualization */}
                <div className="relative aspect-square bg-background/50 rounded-lg border border-border/30 overflow-hidden">
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Grid background */}
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="400" height="400" fill="url(#grid)" />

                    {/* User 1 Drawing - House (always visible from step 0) */}
                    {activeStep >= 0 && (
                      <motion.g
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      >
                        <motion.path
                          d="M 100 250 L 100 150 L 150 100 L 200 150 L 200 250 Z"
                          fill="none"
                          stroke="hsl(var(--accent))"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <motion.rect
                          x="130"
                          y="200"
                          width="40"
                          height="50"
                          fill="none"
                          stroke="hsl(var(--accent))"
                          strokeWidth="3"
                        />
                      </motion.g>
                    )}

                    {/* User 2 Drawing - Sun (visible from step 1) */}
                    {activeStep >= 1 && (
                      <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                      >
                        <motion.circle
                          cx="300"
                          cy="100"
                          r="30"
                          fill="hsl(var(--accent))"
                          opacity="0.8"
                        />
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * Math.PI * 2) / 8;
                          const x1 = 300 + Math.cos(angle) * 35;
                          const y1 = 100 + Math.sin(angle) * 35;
                          const x2 = 300 + Math.cos(angle) * 50;
                          const y2 = 100 + Math.sin(angle) * 50;
                          return (
                            <motion.line
                              key={i}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="hsl(var(--accent))"
                              strokeWidth="3"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                            />
                          );
                        })}
                      </motion.g>
                    )}

                    {/* Sync Animation (step 2) */}
                    {activeStep === 2 && (
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <circle cx="200" cy="175" r="60" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.3" />
                        <circle cx="200" cy="175" r="80" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.2" />
                      </motion.g>
                    )}
                  </svg>

                  {/* User Cursors */}
                  <div className="absolute top-4 right-4 space-y-2">
                    {steps[activeStep].users.map((user, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-accent' : 'bg-primary'}`} />
                        <span className="text-foreground/80">{user.name}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs ${
                            user.status === "online"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-red-500/20 text-red-300"
                          }`}
                        >
                          {user.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Step Description */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
                      {(() => {
                        const StepIcon = steps[activeStep].icon;
                        return <StepIcon className="w-5 h-5" />;
                      })()}
                      <span className="font-semibold">Step {activeStep + 1}</span>
                    </div>
                    <h3 className="text-3xl font-bold">{steps[activeStep].title}</h3>
                    <p className="text-lg text-muted-foreground">{steps[activeStep].description}</p>
                  </div>

                  {steps[activeStep].synced && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 rounded-lg bg-accent/10 border border-accent/30"
                    >
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <CheckCircle className="w-5 h-5" />
                        Changes synced automatically!
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        CRDT technology resolved all conflicts seamlessly. No manual merging required.
                      </p>
                    </motion.div>
                  )}

                  <div className="flex gap-3 pt-4">
                    {activeStep > 0 && (
                      <Button
                        variant="outline"
                        onClick={() => setActiveStep(activeStep - 1)}
                      >
                        Previous
                      </Button>
                    )}
                    {activeStep < steps.length - 1 && (
                      <Button
                        className="bg-accent hover:bg-accent/90"
                        onClick={() => setActiveStep(activeStep + 1)}
                      >
                        Next Step
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
