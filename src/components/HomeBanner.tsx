import Title from '@/components/ui/Title';
import { Fonts } from '@/lib/fonts';

export default function Banner() {
  return (
    <>
      <div className="md:my-20 mb-2 flex flex-col md:flex-row justify-between md:items-center">
        <div className="max-md:mb-5 px-10 flex md:flex-row flex-col md:items-baseline gap-2">
          <Title tag="h1">
            <a href="/">Laurcons</a>
          </Title>
          <i
            className={`${Fonts.ubuntu.className} italic text-2xl self-end whitespace-nowrap text-gray-400`}
          >
            Laurentiu Pricop
          </i>
        </div>
        <div className="overflow-x-auto">
          <div className="inline-block">
            <div className="px-10 py-4 flex gap-10 justify-end">
              <a href="/#projects">Projects</a>
              <a href="/#contact">Contact</a>
              <a href="https://laurcons.ro/yt" target="_blank">
                YouTube
              </a>
              <a href="https://github.com/Laurcons" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
