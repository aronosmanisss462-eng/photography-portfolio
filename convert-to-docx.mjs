import { Document, Packer, Paragraph, TextRun } from "docx";
import { writeFileSync } from "fs";

const F = "Microsoft YaHei";
const S = 21; // 五号字
const p = (text, opts = {}) =>
  new Paragraph({
    children: [new TextRun({ text, font: F, size: S, ...opts })],
    spacing: { after: 120 },
  });

const bold = (text) => p(text, { bold: true });

const doc = new Document({
  sections: [
    {
      children: [
        // ===== 角度1 =====
        bold("角度1：少华山之巅全景体验"),
        p(""),
        bold("帖文"),
        p(""),
        bold("中文："),
        p("7月9日，一场媒体采风调研活动走进陕西渭南少华山景区，集中展示少华山融合生态观光、文化体验与休闲避暑的文旅特色。新投运的盘龙岭索道以全景式缆车串联山水风光，让游客从空中360度俯瞰秦岭；西北首条双向悬空玻璃栈道——蟠龙道，则带来云端漫步的沉浸式体验。平均气温22.5℃的夏季气候，让少华山成为秦岭避暑的热门目的地。从山间清凉到壮阔风光，少华山不断丰富旅游体验，让更多游客感受秦岭的生态之美。"),
        p(""),
        bold("English："),
        p("On July 9, a media tour was held at Shaohua Mountain Scenic Area in Weinan, Shaanxi Province, showcasing the area's blend of mountain landscapes, cultural attractions and summer recreation. Visitors can take in 360-degree views of the Qinling Mountains aboard the newly opened Panlongling Cableway before stepping onto the Panlong Skywalk, the first two-way suspended glass walkway in northwest China. With an average July temperature of 22.5°C, Shaohua Mountain offers a refreshing retreat from the summer heat while highlighting the spectacular scenery of the Qinling Mountains."),
        p(""),
        bold("视频字幕"),
        p(""),
        p("抬头文字：Discover Shaanxi's Cool Side at Shaohua Mountain"),
        p(""),
        bold("字幕1："),
        p(""),
        p("标题：Discover Shaanxi's Cool Side at Shaohua Mountain"),
        p(""),
        p("On July 9, a media tour was held at Shaohua Mountain Scenic Area in Weinan, Shaanxi Province."),
        p(""),
        p("Media teams experienced the newly opened Panlongling Cableway, enjoying 360-degree panoramic views of the Qinling Mountains."),
        p(""),
        p("They also tried the two-way suspended glass walkway, which stretches 69 meters with a vertical drop of 1,600 meters."),
        p(""),
        p("With an average temperature of 22.5°C, Shaohua Mountain offers a refreshing summer retreat."),

        // ===== 角度2 =====
        p(""),
        bold("角度2：探访少华山国际皮影博览园"),
        p(""),
        bold("帖文"),
        p(""),
        bold("中文："),
        p("7月8日，媒体采风团走进位于陕西渭南的少华山国际皮影博览园，近距离感受华州皮影的独特魅力。活动中，国家级非物质文化遗产华州皮影戏精彩上演，传统唱腔与光影艺术交相辉映。媒体还走近非遗传承人，了解皮影雕刻、制作和表演技艺，感受这项古老艺术在传承与创新中的蓬勃生命力。如今，华州皮影正以更加多元的展示方式，让更多人了解陕西深厚的历史文化底蕴。"),
        p(""),
        bold("English："),
        p("On July 8, the media delegation visited the Shaohua Mountain International Shadow Puppetry Museum in Weinan, Shaanxi Province, where they experienced the unique artistry of Huazhou Shadow Puppetry up close. A live performance of this national-level intangible cultural heritage brought traditional singing and the interplay of light and shadow to life. Through exchanges with heritage inheritors, the group also gained insight into the craftsmanship of leather carving, puppet making and shadow theatre performance. Blending craftsmanship, music and storytelling, Huazhou Shadow Puppetry continues to preserve a centuries-old cultural tradition while bringing the richness of Shaanxi's folk heritage to ever-wider audiences."),
        p(""),
        bold("视频字幕"),
        p(""),
        bold("字幕2："),
        p(""),
        p("标题：Huazhou Shadow Puppetry: Experience Shaanxi's Intangible Cultural Heritage"),
        p(""),
        p("On July 8, the media tour visited the Shaohua Mountain International Shadow Puppetry Museum in Weinan, Shaanxi Province."),
        p(""),
        p("A live performance showcased Huazhou Shadow Puppetry, a national-level intangible cultural heritage of China."),
        p(""),
        p("Visitors explored the craftsmanship behind leather carving, puppet making, and traditional shadow theatre."),
        p(""),
        p("Centuries-old traditions continue to inspire new audiences through the enduring art of light and shadow."),

        // ===== 修改说明 =====
        p(""),
        bold("修改说明"),
        p(""),
        p("1. 活动名称：不翻译官方英文活动名称，改用 \"a media tour was held / the media tour visited\" 等自然表述。"),
        p("2. 时间介词：全部由 \"In July\" 改为 \"On July 9\" / \"On July 8\"。"),
        p("3. 角度2中文帖文开头：原句较生硬，改为更自然的叙事——时间（7月8日）+ 人物（媒体采风团）+ 地点（少华山国际皮影博览园）+ 事件（近距离感受华州皮影），后续正常展开活动内容。"),
        p("4. 角度2英文帖文开头：同步调整，改为 \"On July 8, the media delegation visited...\" 的叙事结构，衔接更流畅。"),
        p("5. 字幕2英文标题：新增翻译 \"Huazhou Shadow Puppetry: Experience Shaanxi's Intangible Cultural Heritage\"。"),
      ],
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
writeFileSync("c:\\Users\\13465\\Desktop\\claude工作\\少华山稿件修改.docx", buffer);
console.log("done");
