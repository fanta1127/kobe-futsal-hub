import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy } from "lucide-react";

const matches = [
  {
    tournament: "関西学生フットサルリーグ",
    date: "通年開催",
    location: "関西各地",
    status: "ongoing",
  },
  {
    tournament: "全日本大学フットサル選手権",
    date: "春〜夏",
    location: "インカレ関西大会",
    status: "upcoming",
  },
  {
    tournament: "神戸カップ",
    date: "春季",
    location: "神戸市内",
    status: "upcoming",
  },
  {
    tournament: "全日本フットサル選手権",
    date: "冬季",
    location: "全国大会",
    status: "future",
  },
];

export const Matches = () => {
  return (
    <section id="matches" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            試合情報・大会スケジュール
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            年間を通じて様々な大会に出場しています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {matches.map((match, index) => (
            <Card 
              key={index}
              className="hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 border-2"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Trophy className="w-8 h-8 text-accent" />
                  <Badge 
                    variant={match.status === "ongoing" ? "default" : "secondary"}
                    className="ml-2"
                  >
                    {match.status === "ongoing" ? "開催中" : 
                     match.status === "upcoming" ? "今後開催" : "予定"}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{match.tournament}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <span>{match.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>{match.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto bg-accent/10 border-accent">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">目標：インカレ全国大会出場</CardTitle>
              <CardDescription className="text-base">
                2008年〜2010年の全日本学生選手権3連覇の栄光を再び。
                今年こそ全国大会の舞台へ！
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
