import { Twitter, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">神戸大学医学部フットサル部</h3>
            <p className="text-sm text-primary-foreground/60">
              医学部生によるフットサル部。楠キャンパスを拠点に活動中。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">活動情報</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>活動日：金曜 17:00-19:00（正規）、土曜 19:00-21:00（非正規・隔週）</li>
              <li>場所：楠キャンパス福利厚生棟7F体育館</li>
              <li>部費：年間20,000円</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">リンク</h4>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/kobe_med_futsal_fg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                公式Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} 神戸大学医学部フットサル部. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
