import { NextResponse } from 'next/server';

export async function POST() {
  const host = 'vitalizelianko.me';
  const key = '9a4f7c2e8b1d4e6f9a0c3b5e7d1f8a2c';
  const keyLocation = `https://${host}/${key}.txt`;

  const urlList = [
    `https://${host}/`,
    `https://${host}/vitali-zelianko-cv.pdf`,
    `https://${host}/resume.pdf`,
    `https://${host}/brand-pack/01_VZ_Titanium_Emblem_Full_1024x1024.jpg`,
    `https://${host}/brand-pack/07_Telegram_WhatsApp_Avatar_800x800.png`,
    `https://${host}/brand-pack/10_LinkedIn_Portrait_Avatar_800x800.png`
  ];

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList,
      }),
    });

    const status = response.status;
    return NextResponse.json({
      success: status === 200 || status === 202,
      status,
      message: 'IndexNow submission completed for Bing, Yandex, Seznam & Naver'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return POST();
}
