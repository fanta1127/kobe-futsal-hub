import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, DollarSign } from "lucide-react";

const weekDays = [
  { day: "月曜日", active: false },
  { day: "火曜日", active: false },
  { day: "水曜日", active: false },
  { day: "木曜日", active: false },
  { day: "金曜日", active: true, time: "17:00-19:00" },
  { day: "土日", active: false },
];

const locations = [
  "楠キャンパス体育館",
  "近隣フットサル施設",
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
            学業と両立しやすい、週2〜3日の活動
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
                    <div>{item.day}</div>
                    {item.active && 'time' in item && (
                      <div className="text-sm mt-1 opacity-90">{item.time}</div>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                週1日の活動で、医学部での学業との両立も可能
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
                <p className="text-3xl font-bold text-accent">月 1,500円</p>
                <p className="text-sm text-muted-foreground mt-2">
                  施設利用料・ボール代・その他雑費
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
