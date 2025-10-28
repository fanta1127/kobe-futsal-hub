import { Twitter, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">神戸大学フットサル部</h3>
            <p className="text-primary-foreground/80 mb-2">Força × Guerreilla</p>
            <p className="text-sm text-primary-foreground/60">
              最強のチームを目指して
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">活動情報</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>活動日：毎週火・木・土・日</li>
              <li>場所：国際文化学部体育館</li>
              <li>部費：月2,000円</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">リンク</h4>
            <div className="space-y-3">
              <a 
                href="https://twitter.com/kobe_futsal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
                公式Twitter
              </a>
              <a 
                href="https://ameblo.jp/kobefutsalfg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                公式ブログ
              </a>
              <a 
                href="https://kobeu-sau.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                神戸大学体育会
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} 神戸大学フットサル部 Força × Guerreilla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
