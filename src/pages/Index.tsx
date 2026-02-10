import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, Image, Sparkles, MoreVertical, Users, Gift, Coins } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { mockTemplateSets, mockFreeTemplateSets, mockSharedTemplateSets } from "@/data/mockTemplates";

const Index = () => {
  const navigate = useNavigate();

  const totalTemplates = mockTemplateSets.reduce(
    (sum, s) => sum + s.templates.length,
    0
  );

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <h1 className="font-display text-2xl font-bold">LotGraphics</h1>
            </div>
            <button
              onClick={() => navigate("/shop")}
              className="flex items-center gap-1.5 bg-accent/10 text-accent rounded-full px-3 py-1.5 text-sm font-semibold hover:bg-accent/20 transition-colors"
            >
              <Coins className="w-4 h-4" />
              <span>10</span>
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            Generate custom social media content for your auction listings and more in seconds.
          </p>
        </motion.div>
      </header>

      {/* CTA */}
      <div className="px-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Button
            onClick={() => navigate("/create")}
            className="w-full h-14 text-base font-semibold gap-2 rounded-xl"
          >
            <Plus className="w-5 h-5" />
            Create New Graphic
          </Button>
        </motion.div>
      </div>


      {/* Recent templates */}
      <div className="px-4 flex-1">
        <h2 className="font-display text-base font-semibold mb-3 flex items-center gap-2">
          <Image className="w-4 h-4 text-muted-foreground" />
          Your Custom Templates
        </h2>

        <div className="space-y-3">
          {mockTemplateSets.map((set, i) => (
            <motion.button
              key={set.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.08 }}
              onClick={() => navigate("/create")}
              className="w-full bg-card border border-border rounded-xl p-4 text-left active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Image className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm">{set.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {set.templates.length} variation{set.templates.length > 1 ? "s" : ""}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 shrink-0">
                      <MoreVertical className="w-4 h-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-popover z-50">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Free Templates */}
        {mockFreeTemplateSets.length > 0 && (
          <>
            <h2 className="font-display text-base font-semibold mt-6 mb-3 flex items-center gap-2">
              <Gift className="w-4 h-4 text-muted-foreground" />
              Free Templates
            </h2>

            <div className="space-y-3">
              {mockFreeTemplateSets.map((set, i) => (
                <motion.button
                  key={set.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  onClick={() => navigate("/create")}
                  className="w-full bg-card border border-border rounded-xl p-4 text-left active:scale-[0.98] transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Gift className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm">{set.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {set.templates.length} variation{set.templates.length > 1 ? "s" : ""}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 shrink-0">
                          <MoreVertical className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover z-50">
                        <DropdownMenuItem>Use Template</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </motion.button>
              ))}
            </div>
          </>
        )}

        {/* Shared with you */}
        {mockSharedTemplateSets.length > 0 && (
          <>
            <h2 className="font-display text-base font-semibold mt-6 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              Shared with You
            </h2>

            <div className="space-y-3">
              {mockSharedTemplateSets.map((set, i) => (
                <motion.button
                  key={set.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  onClick={() => navigate("/create")}
                  className="w-full bg-card border border-border rounded-xl p-4 text-left active:scale-[0.98] transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm">{set.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        Shared by {set.sharedBy}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {set.templates.length} variation{set.templates.length > 1 ? "s" : ""}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 shrink-0">
                          <MoreVertical className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover z-50">
                        <DropdownMenuItem>Use Template</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </motion.button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Bottom padding for mobile */}
      <div className="h-8" />
    </div>
  );
};

export default Index;
