# Sifre Guvenirligini Olcen ve Rastgele Sifre Ureten Web Sayfasi Projesi

**Projenin Amacı**

Bu proje, kullanıcıların zayıf şifreler kullanması nedeniyle hesaplarının ele geçirilmesine yönelik ciddi bir riski ortadan kaldırmayı hedeflemektedir. Proje kapsamında, kullanıcılara rastgele şifreler üretilip önerilecek ve bu web sayfası GitHub'a yüklenerek bulut ortamına taşınacaktır. Kullanıcıların güçlü ve güvenli şifreler oluşturabilmeleri için rehberlik sağlanacak ve kullanıcı dostu bir arayüz geliştirilecektir. Bu arayüz, şifrelerin uzunluk, büyük-küçük harf, sayı ve sembol gibi   faktörlere odaklanarak güçlü şifrelerin oluşturulmasını sağlayacaktır.

**Projenin Aşamaları**:

**1.Adım: Şifre Gösterme/Gizleme:**

toogle() fonksiyonu, kullanıcının şifreyi gösterip gizlemesini sağlar. Kullanıcı, göz simgesine tıkladığında şifrenin görünürlüğü değişir. Bu işlev, kullanıcının şifresini yazarken yanlışlıkla hatalı karakterler eklemesini önlemek için tasarlanmıştır. Ayrıca, kullanıcıların şifrelerini hatırlamalarına yardımcı olur ve doğru girişi sağlamalarına yardımcı olur.

**2.Adım: Şifre Uyarıları ve Şifre Güvenilirliği Değerlendirme Mekanizması:**

Bu arayüz, bir kullanıcının girdiği şifrenin güvenlik seviyesini kontrol eden bir mekanizmayı uygular. Kullanıcının girdiği şifre, büyük harf, küçük harf, rakam ve sembol içeriyorsa, bu kriterleri karşıladığına dair renkli göstergeler verilir. Her bir şart için ayrı bir kontrol yapılır.
Büyük ve Küçük Harf Kontrolü: Girilen şifrede hem büyük hem de küçük harf bulunup bulunmadığı kontrol edilir. Eğer şifre hem büyük hem de küçük harf içeriyorsa, ilgili alanların (HTML'de muhtemelen metin veya giriş kutuları) rengi yeşile dönüştürülür; aksi halde siyah olur.
• Rakam Kontrolü: Girilen şifrede en az bir rakam bulunup bulunmadığı kontrol edilir. Eğer şifre bir rakam içeriyorsa, ilgili alanın rengi yeşile dönüştürülür; aksi halde siyah olur.

• Sembol Kontrolü: Girilen şifrede en az bir sembol bulunup bulunmadığı kontrol edilir. Eğer şifre bir sembol içeriyorsa, ilgili alanın rengi yeşile dönüştürülür; aksi halde siyah olur.

• Uzunluk Kontrolü: Girilen şifrenin uzunluğu 12 karakter veya daha fazlaysa, ilgili alanın rengi yeşile dönüştürülür; aksi halde siyah olur.

• Büyük/Küçük Harf ve Rakam Zorunluluğu: Şifrenin hem büyük/küçük harf, hem de rakam içermesi gerekiyorsa, girdi kutusunun kenar rengi kırmızıya dönüştürülür; aksi halde siyah olur.

• Güçlü Şifre Kontrolü: Şifrenin büyük/küçük harf, rakam, sembol içerip ve uzunluğu 12 karakter veya daha fazlaysa, girdi kutusunun kenar rengi yeşile dönüştürülür.

**3.Adım: Şifrenin Kırılma Süresi**

Şifrenin kırılma süresini gösteren bir alanın dinamik olarak güncellenmesi için JavaScript'te Zxcvbn kütüphanesini kullanılmıştır. Bu kütüphane, girilen şifrenin güvenlik düzeyini analiz eder ve şifrenin ne kadar sürede kırılabileceğine dair bir tahminde bulunur.
Örneğin, bir web sitesinde kullanıcı bir şifre oluştururken, Zxcvbn kütüphanesi kullanılarak şifrenin kırılma süresi dinamik olarak hesaplanabilir ve kullanıcıya gösterilebilir. Böylece kullanıcı, daha güçlü bir şifre oluşturmak için gerekli adımları atabilir.
JavaScript index kısmına eklenen Zxcvbn kütüphanesi, şifrenin kırılma süresini hesaplamak ve bu bilgiyi kullanıcıya sunmak için kullanılır. Bu sayede kullanıcılar, şifrelerinin güvenliğini daha iyi anlayabilir ve gerektiğinde daha güçlü şifreler oluşturabilirler.

**4.Adım: Rastgele Şifre Üretme**

Kullanıcılar istedikleri sayıda şifre oluşturabilmek için giriş alanına sahip olacaklar. “Oluştur” butonuna tıklandığında, JavaScript işlevi devreye girerek kullanıcının belirlediği sayıda rastgele şifre oluşturulması sağlanacak. Bu şifreler, belirli karakter kümesinden (rakamlar, harfler, semboller) rastgele seçilerek oluşturulup, oluşturulan şifreler, kullanıcıların görebileceği bir bölümde görüntülenerek, kullanıcılara alternatif bir şifre önerisinde bulunacak.





