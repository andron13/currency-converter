function FallbackUi() {
  return (
    <main className="flex h-screen items-center justify-center p-6">
      <div className="px-8 py-10">
        <h2 className="mb-2 text-2xl font-semibold text-gray-200">
          Something went really wrong 😱
        </h2>
        <p>If you faced any issues, please contact our support team</p>
        <a className="block text-blue-400" href="/#">
          example@example.com
        </a>
      </div>
    </main>
  );
}

export default FallbackUi;
