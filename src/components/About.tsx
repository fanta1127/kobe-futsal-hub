import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, Target, Award } from "lucide-react";
import teamImage from "@/assets/team-celebration.jpg";

const stats = [
  { icon: Users, label: "部員数", value: "22名", color: "text-primary" },
  { icon: Trophy, label: "医学部内大会", value: "優勝経験", color: "text-accent" },
  { icon: Target, label: "週間活動", value: "2日", color: "text-primary" },
  { icon: Award, label: "活動拠点", value: "楠キャンパス", color: "text-accent" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">チーム紹介</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">神戸大学医学部のフットサル部。医学科・保健学科の学生が共にプレーし、チームワークを育みます。</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-2 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="pt-6">
                    <Icon className={`w-12 h-12 mx-auto mb-3 ${stat.color}`} />
                    <p className="text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">チーム理念</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base leading-relaxed">
                  <p>
                    <strong className="text-primary">「医療現場で求められるチームワークをフットサルで磨く」</strong>
                  </p>
                  <p>
                    医学科・保健学科の学生が協力し、将来の医療現場で必要となる
                    チームワーク、コミュニケーション能力を、フットサルを通じて楽しみながら磨きます。
                    楠キャンパスを拠点に、学業との両立を大切にしながら活動しています。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">活動実績</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-base">
                  <p>
                    🏆 <strong>医学部内フットサル大会</strong>
                    <br />
                    <span className="text-accent font-bold">優勝経験</span>
                  </p>
                  <p>
                    ⚽ <strong>近畿医学部フットサル大会</strong>出場
                  </p>
                  <p className="text-muted-foreground text-sm">医学部生として、楠キャンパスから全国へ</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-[var(--shadow-elegant)]">
                <img src={teamImage} alt="チーム集合写真" className="w-full h-auto object-cover" />
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">医学部生によるチーム運営</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-base leading-relaxed">
                  <p>
                    医学科・保健学科の学生が協力し、学年の垣根を越えたチーム作りを行っています。
                    将来の医療現場で必要となるチームワーク、コミュニケーション能力を、
                    フットサルを通じて楽しみながら磨くことができます。
                  </p>
                  <p>
                    学業との両立を第一に考え、無理のない活動スケジュールを組んでいます。
                  </p>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-semibold mb-3">学年別部員数</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between"><span>1年生:</span><span className="font-bold text-primary">3名</span></div>
                      <div className="flex justify-between"><span>2年生:</span><span className="font-bold text-primary">7名</span></div>
                      <div className="flex justify-between"><span>3年生:</span><span className="font-bold text-primary">5名</span></div>
                      <div className="flex justify-between"><span>4年生:</span><span className="font-bold text-primary">2名</span></div>
                      <div className="flex justify-between"><span>5年生:</span><span className="font-bold text-primary">2名</span></div>
                      <div className="flex justify-between"><span>6年生:</span><span className="font-bold text-primary">3名</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
