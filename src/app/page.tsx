import Link from "next/link";

export default function Page() {
  return (
    <main className="p-4">
      <h1>플로우션 | Flowtion</h1>
      <p>
        동영상 자동 재생 노션 위젯
        <br />
        Autoplay Video Widget for Notion
      </p>
      <article>
        <header>⬇️ 위젯 만들기 문의</header>
        <Link href="https://open.kakao.com/o/sbUtEmYg">
          https://open.kakao.com/o/sbUtEmYg
        </Link>
      </article>
    </main>
  );
}
