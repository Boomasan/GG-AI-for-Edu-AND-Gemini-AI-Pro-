# 🚀 Update Log & Release Notes (2026-10-06)

**Project:** Google AI Pro for Education Landing Page  
**Author / Contributor:** The S Curve Team  
**Live Production URL:** [https://google-ai-pro-for-education-895801405356.asia-southeast1.run.app](https://google-ai-pro-for-education-895801405356.asia-southeast1.run.app)  
**Target Environment:** Google Cloud Run (`asia-southeast1`, Project: `astral-host-252108`)  

---

## 📌 1. ภาพรวมการทำงานในวันนี้ (Executive Summary)

ในรอบการทำงานวันนี้ ได้มีการปรับปรุงหน้า Landing Page ของ **Google AI Pro for Education** โดยเน้นการเพิ่มช่องทางการติดต่อสื่อสารที่รวดเร็ว (Conversion Channel) และการให้ข้อมูลข้อสงสัยที่พบบ่อย (FAQ) แก่สถาบันการศึกษา รวมถึงการ Build และ Deploy ขึ้นสู่สภาพแวดล้อม Production บน Google Cloud Run แบบ Zero Downtime

---

## 🛠️ 2. รายละเอียดงานที่ดำเนินการ (Detailed Changes)

### 2.1 เพิ่มและจัดระเบียบส่วน "Line OA : the S Curve Team" (Section 6)
- **วัตถุประสงค์:** เปลี่ยนผ่านจากการกรอกฟอร์มแบบเดิม มาเป็นการติดต่อผ่าน LINE Official Account โดยตรง เพื่อเพิ่มความสะดวกและลดขั้นตอนการติดต่อของลูกค้า
- **สิ่งที่ดำเนินการ:**
  - เพิ่มไฟล์รูปภาพ QR Code ทางการ: [`Image/line-oa-qr.png`](./Image/line-oa-qr.png)
  - กำหนดหัวข้อหลักชัดเจน: **"Line OA : the S Curve Team"** พร้อม Badge กำกับ `LINE Official Account`
  - เพิ่มจุดเด่นและสิทธิประโยชน์ในการแอดไลน์ (แชทคุยกับผู้เชี่ยวชาญ, ขอใบเสนอราคาพิเศษ, นัดหมาย Live Demo)
  - สร้างปุ่ม Action Button สีเขียวมาตรฐานแบรนด์ LINE (`#06C755`) พร้อมโลโก้ LINE เชื่อมต่อไปยังลิงก์ [https://lin.ee/R0N7wea](https://lin.ee/R0N7wea) (เปิดแท็บใหม่แบบ `target="_blank" rel="noopener noreferrer"`)
  - จัดระเบียบ Grid System ให้ฝั่งซ้าย (`Exclusive Offer`) และฝั่งขวา (`Line OA Card`) มีความสูงเท่ากัน สมดุล สวยงาม และรองรับ Responsive 100%

### 2.2 เพิ่มส่วน "คำถามที่พบบ่อย" FAQ Accordion (Section 7)
- **วัตถุประสงค์:** ตอบข้อสงสัยหลักด้านเทคนิค ความปลอดภัย ข้อกำหนด และการจัดซื้อใบอนุญาต ตามมาตรฐานของ Google for Education
- **สิ่งที่ดำเนินการ:**
  - จัดวางไว้ที่ส่วนล่างสุดของเนื้อหาเว็บไซต์ (ก่อนเข้าสู่ Footer)
  - เพิ่มหัวข้อหลักกึ่งกลางหน้า: **"หากมีข้อสงสัย เรามีคำตอบให้คุณ"**
  - เพิ่มปุ่มควบคุมแบบ Global: `ยุบทั้งหมด ↑↓` / `ขยายทั้งหมด ↑↓` ที่มุมขวาบน
  - บรรจุคำถาม-คำตอบครบทั้ง 6 ข้อ:
    1. **มีข้อจำกัดสำหรับผู้ที่สามารถใช้ Gemini ไหม** (รองรับ 40+ ภาษา และเกณฑ์อายุ 18+ ใน Workspace พร้อมลิงก์ศูนย์ช่วยเหลือ)
    2. **การปกป้องความเป็นส่วนตัวและความปลอดภัยของข้อมูล** (อธิบายการคุ้มครองข้อมูลระดับองค์กร ไม่นำข้อมูลไปเทรน AI พร้อมลิงก์ Privacy Hub)
    3. **การซื้อขั้นต่ำและข้อกำหนดก่อนซื้อ** (สั่งซื้อได้ตั้งแต่ 1 สิทธิ์ขึ้นไป สำหรับทุกรุ่นของ Google Workspace for Education)
    4. **ช่องทางการสั่งซื้อ Google AI Pro for Education** (สั่งซื้อผ่าน S-Curve พาร์ทเนอร์ที่ได้รับอนุญาต)
    5. **การมอบหมายสิทธิ์ใบอนุญาตใน Admin Console**
    6. **ข้อกำหนดในการให้บริการ** (อยู่ภายใต้ข้อกำหนดการให้บริการหลักของ Google Workspace for Education)
  - ระบบ Interactive JavaScript ควบคุมการเปิด-ปิดรายข้อและเปิด-ปิดพร้อมกันทุกข้อ พร้อมแอนิเมชันปุ่มวงกลมสีน้ำเงินหมุนสลับไอคอน `+` และ `×`

### 2.3 ปรับปรุงโครงสร้าง Code & Format Cleanup
- จัดระเบียบ Tag โครงสร้าง HTML ให้ถูกต้องตามมาตรฐาน W3C
- ลบ Tag ปิดค้างและจัด Indentation ให้อ่านง่าย สะอาดตา
- ปรับแต่ง JavaScript Controller ให้ใช้ `querySelectorAll` ป้องกันปัญหา Temporal Dead Zone (TDZ) และรองรับการทำงานแบบ Dynamic

### 2.4 Build และ Deploy ขึ้น Google Cloud Run
- รันคำสั่ง `npm run build` ด้วย Vite บันเดิล Assets และไฟล์ HTML ออกมายังโฟลเดอร์ `dist/` ได้อย่างสมบูรณ์แบบ (ขนาด Gzip ~22 KB)
- Deploy ขึ้นสู่ **Google Cloud Run** โดยตรงผ่าน Google Cloud SDK:
  - **Service:** `google-ai-pro-for-education`
  - **Region:** `asia-southeast1`
  - **Project:** `astral-host-252108`
  - **Revision ที่สร้างขึ้น:** `google-ai-pro-for-education-00019-qfm`
  - **Traffic:** จัดสรรรับผู้ใช้งาน 100%
  - **ผลการทดสอบ Live:** หน้าเว็บออนไลน์และแสดงผลฟีเจอร์ใหม่ครบถ้วน

---

## 📁 3. รายการไฟล์ที่มีการเปลี่ยนแปลง (File Changes Summary)

| ไฟล์ | สถานะ | รายละเอียด |
| :--- | :---: | :--- |
| `index.html` | Modified | ปรับแก้ Section 6 (Line OA), เพิ่ม Section 7 (FAQ) และเพิ่มสคริปต์ Accordion Controller |
| `Image/line-oa-qr.png` | Added | รูปภาพ QR Code สำหรับ Line Official Account |
| `dist/index.html` | Updated | Production HTML ที่ได้จากการ Build ของ Vite |
| `dist/assets/*` | Updated | Asset Bundles (Images, CSS, JS) ที่พร้อมใช้งานบน Server |
| `CHANGELOG.md` | Added | บันทึกสรุปการอัปเดตงานสำหรับแชร์ในทีม |

---

## 🔗 4. ข้อมูลการเชื่อมต่อและ Production Links

- **URL เว็บไซต์สด (Cloud Run):** [https://google-ai-pro-for-education-895801405356.asia-southeast1.run.app](https://google-ai-pro-for-education-895801405356.asia-southeast1.run.app)
- **Direct Link - Contact Section:** [https://google-ai-pro-for-education-895801405356.asia-southeast1.run.app/#contact](https://google-ai-pro-for-education-895801405356.asia-southeast1.run.app/#contact)
- **Direct Link - FAQ Section:** [https://google-ai-pro-for-education-895801405356.asia-southeast1.run.app/#faq](https://google-ai-pro-for-education-895801405356.asia-southeast1.run.app/#faq)
- **Line Official Account:** [https://lin.ee/R0N7wea](https://lin.ee/R0N7wea)

---

## 💡 5. คำแนะนำสำหรับการ Commit & Push ขึ้น GitHub

สามารถใช้ชุดคำสั่ง Git ด้านล่างนี้เพื่อบันทึกและอัปเดตงานขึ้น GitHub:

```bash
# 1. ตรวจสอบสถานะไฟล์
git status

# 2. เพิ่มไฟล์ที่แก้ไขและไฟล์ใหม่เข้า Staging Area
git add Google_AI_Pro_for_Education/index.html
git add Google_AI_Pro_for_Education/Image/line-oa-qr.png
git add Google_AI_Pro_for_Education/CHANGELOG.md

# 3. Commit พร้อมข้อความอธิบายงานที่ชัดเจน
git commit -m "feat: add Line OA contact section, FAQ accordion, and deploy to Cloud Run"

# 4. Push การเปลี่ยนแปลงขึ้น GitHub
git push origin main
```
