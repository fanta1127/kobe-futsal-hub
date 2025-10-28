import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, DollarSign } from "lucide-react";

const weekDays = [
  { day: "火曜日", active: true },
  { day: "水曜日", active: false },
  { day: "木曜日", active: true },
  { day: "金曜日", active: false },
  { day: "土曜日", active: true },
  { day: "日曜日", active: true },
];

const locations = [
  "国際文化学部体育館",
  "アスコフットサルパークMAYA",
];

export const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            活動日・練習情報
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            週4日の充実した練習で着実にスキルアップ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Activity Days */}
          <Card className="border-2 hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Clock className="w-6 h-6 text-primary" />
                週間スケジュール
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {weekDays.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg text-center font-semibold transition-all duration-300 ${
                      item.active
                        ? "bg-primary text-primary-foreground shadow-md scale-105"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.day}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                週4日（火・木・土・日）の活動で、学業との両立も可能
              </p>
            </CardContent>
          </Card>

          {/* Location & Details */}
          <Card className="border-2 hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MapPin className="w-6 h-6 text-accent" />
                活動場所・費用
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-lg">練習場所</h4>
                <div className="space-y-2">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="p-3 bg-secondary rounded-lg text-secondary-foreground"
                    >
                      {location}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-accent/10 rounded-lg border-2 border-accent">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-lg">部費</h4>
                </div>
                <p className="text-3xl font-bold text-accent">月 2,000円</p>
                <p className="text-sm text-muted-foreground mt-2">
                  リーズナブルな部費で本格的なフットサルが楽しめます
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
