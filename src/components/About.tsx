import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, Target, Award } from "lucide-react";
import teamImage from "@/assets/team-celebration.jpg";

const stats = [
  { icon: Users, label: "部員数", value: "33名", color: "text-primary" },
  { icon: Trophy, label: "全国大会", value: "3連覇", color: "text-accent" },
  { icon: Target, label: "週間活動", value: "4日", color: "text-primary" },
  { icon: Award, label: "設立年", value: "2008年", color: "text-accent" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">チーム紹介</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">最強のチームを目指してあああああああああ</p>
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
                    <strong className="text-primary">「大学フットサルの持つ可能性の追求」</strong>
                  </p>
                  <p>
                    私たちは、競技面で最も強く、志が最も強く、一体感が最も強く、
                    フットサルへの想いが最も強い「最強のチーム」を目指し続けています。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">栄光の歴史</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-base">
                  <p>
                    🏆 <strong>2008年〜2010年</strong>
                    <br />
                    全日本学生選手権 <span className="text-accent font-bold">3連覇</span>
                  </p>
                  <p>
                    ⚽ Fリーグの<strong>デウソン神戸</strong>に選手を輩出
                  </p>
                  <p className="text-muted-foreground text-sm">過去の栄光に満足せず、新たな歴史を創造します</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-[var(--shadow-elegant)]">
                <img src={teamImage} alt="チーム集合写真" className="w-full h-auto object-cover" />
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">学生主体のチーム作り</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-base leading-relaxed">
                  <p>
                    当部では学生主体のチーム作りを目指しており、試合の監督や
                    普段の練習メニューの作成もすべて学生が行っています。
                  </p>
                  <p>
                    一人一人が主体的に自身のプレーについてだけでなく、 チーム全体のことを考えることができる環境です。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
