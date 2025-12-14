import { motion } from "framer-motion";
import { FileText, Download, Check, ExternalLink, Shield, Folder } from "lucide-react";

interface Document {
  id: number;
  title: string;
  type: string;
  size: string;
  status: "verified" | "pending";
  preview: string;
}

const documents: Document[] = [
  { id: 1, title: "Flight Tickets", type: "PDF", size: "2.4 MB", status: "verified", preview: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80" },
  { id: 2, title: "Hotel Confirmations", type: "PDF", size: "1.8 MB", status: "verified", preview: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
  { id: 3, title: "Tour Reservations", type: "PDF", size: "3.2 MB", status: "verified", preview: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80" },
  { id: 4, title: "Restaurant Bookings", type: "PDF", size: "856 KB", status: "pending", preview: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80" },
  { id: 5, title: "Travel Insurance", type: "PDF", size: "1.1 MB", status: "verified", preview: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80" },
  { id: 6, title: "Emergency Contacts", type: "PDF", size: "245 KB", status: "verified", preview: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&q=80" },
  { id: 7, title: "Visa Documents", type: "PDF", size: "1.5 MB", status: "verified", preview: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80" },
  { id: 8, title: "Itinerary Summary", type: "PDF", size: "4.2 MB", status: "verified", preview: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80" },
];

const DocumentVault = () => {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-gradient-to-b from-background via-champagne/10 to-background">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="font-accent text-base sm:text-lg text-secondary">Your Documents</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 mb-3 sm:mb-4">
            Travel <span className="gradient-text">Vault</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            All your essential documents, organized and verified, ready for your journey.
          </p>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-foreground">256-bit encrypted • GDPR compliant</span>
          </div>
        </motion.div>

        {/* Documents Grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8, rotateX: 5 }}
              className="document-card group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Document Preview */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={doc.preview}
                  alt={doc.title}
                  className="w-full h-full object-cover opacity-20"
                />
                
                {/* Document Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  {doc.status === "verified" ? (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center shadow-glow-primary">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center animate-pulse">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary-foreground" />
                    </div>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-1.5 sm:gap-2">
                    <button className="flex-1 py-1.5 sm:py-2 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium flex items-center justify-center gap-1 hover:bg-primary/90 transition-colors">
                      <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Download</span>
                    </button>
                    <button className="py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg bg-background text-foreground border border-border hover:bg-muted transition-colors">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Document Info */}
              <div className="p-3 sm:p-4 border-t border-border/50">
                <h3 className="font-heading font-semibold text-foreground text-xs sm:text-sm truncate">
                  {doc.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 sm:mt-1">{doc.type} • {doc.size}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download All & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Folder className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">8 Documents Ready</p>
                <p className="text-sm text-muted-foreground">Total: 15.3 MB</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-luxury flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download All</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentVault;
