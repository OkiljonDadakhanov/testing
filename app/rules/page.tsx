import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const documents = [
  {
    title: "Competition Rules 2024",
    category: "Rules",
    file: "/docs/dmbook.pdf",
    description: "Complete rulebook for ARBIChO 2024",
  },
  {
    title: "Safety Guidelines",
    category: "Guidelines",
    file: "/documents/safety-guidelines.pdf",
    description: "Laboratory safety protocols and requirements",
  },
  {
    title: "Participant Handbook",
    category: "Guidelines",
    file: "/documents/participant-handbook.pdf",
    description: "Essential information for all participants",
  },
  {
    title: "Evaluation Criteria",
    category: "Rules",
    file: "/documents/evaluation-criteria.pdf",
    description: "Detailed scoring and evaluation system",
  },
];

export default function RulesGuidelinesPage() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#011c2c] to-[#012e40]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
          >
            Info Center
          </Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Rules & Guidelines
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-100/80">
            Access official competition rules and guidelines for ARBIChO.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-emerald-100">
                Official Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.file}
                  className="flex items-center justify-between p-4 rounded-lg bg-emerald-900/20 hover:bg-emerald-900/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-emerald-400 mt-1" />
                    <div>
                      <h3 className="font-medium text-emerald-100">
                        {doc.title}
                      </h3>
                      <div className="flex gap-2 mt-1 text-sm">
                        <span className="text-emerald-400">{doc.category}</span>
                        <span className="text-emerald-100/70">
                          • {doc.description}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-800/20 bg-emerald-900/20 text-emerald-100 hover:bg-emerald-900/40"
                    asChild
                  >
                    <a href={doc.file} download>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* PDF Preview */}
          <div className="mt-8">
            <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-emerald-100">
                  Document Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <iframe
                  src="/docs/dmbook.pdf"
                  className="w-full h-[600px] rounded-lg"
                  title="Document Preview"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
