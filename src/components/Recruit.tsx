import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Users, MessageCircle, ExternalLink } from "lucide-react";

const positions = [
  {
    title: "フィールドプレーヤー",
    description: "攻撃から守備まで、様々なポジションで活躍",
    icon: Users,
  },
  {
    title: "ゴレイロ（GK）",
    description: "特に募集中！未経験者も歓迎します",
    icon: UserPlus,
    highlight: true,
  },
  {
    title: "マネージャー",
    description: "チームを支える重要な存在",
    icon: MessageCircle,
  },
];

export const Recruit = () => {
  return (
    <section id="recruit" className="py-20 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 bg-accent text-accent-foreground rounded-full font-bold text-lg animate-pulse">
            部員募集中！
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            新入部員大歓迎
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            医学部生として、フットサルを楽しみながらチームワークを育みませんか？
            医学科・保健学科問わず、経験者も初心者も大歓迎です！
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {positions.map((position, index) => {
            const Icon = position.icon;
            return (
              <Card 
                key={index}
                className={`text-center border-2 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 ${
                  position.highlight ? "border-accent bg-accent/5" : ""
                }`}
              >
                <CardHeader>
                  <Icon className={`w-12 h-12 mx-auto mb-3 ${position.highlight ? "text-accent" : "text-primary"}`} />
                  <CardTitle className="text-xl">
                    {position.title}
                  </CardTitle>
                  {position.highlight && (
                    <div className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-bold">
                      特に募集中
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{position.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">入部について</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-primary">必要なもの</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 運動靴（体育館用シューズ）</li>
                    <li>• 動ける服装</li>
                    <li>• 医学部生としてのチームスピリット！</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-primary">こんな方におすすめ</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 医学部での学業と両立したい</li>
                    <li>• 医学科・保健学科の垣根を越えた仲間が欲しい</li>
                    <li>• フットサルで楽しくリフレッシュしたい</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent bg-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">お問い合わせ</CardTitle>
              <CardDescription className="text-base">
                体験練習や見学も大歓迎です！お気軽にご連絡ください
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => window.open("https://twitter.com/kobe_futsal", "_blank")}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  公式Twitter
                </Button>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => window.open("https://ameblo.jp/kobefutsalfg/", "_blank")}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  公式ブログ
                </Button>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                公式アカウントのDMよりお気軽にお問い合わせください
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 bg-primary/5">
            <CardContent className="py-8">
              <p className="text-xl md:text-2xl font-bold mb-2">
                医学部生として、フットサルで充実したキャンパスライフを送りましょう！
              </p>
              <p className="text-lg text-muted-foreground">
                部員一同、皆さんの参加をお待ちしています！
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
