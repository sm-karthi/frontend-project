import { BackToHomeLink, SideMenu } from '@/components';

export function Header() {
    return (
        <div className="flex justify-between text-[#adadad] text-xl">

            <BackToHomeLink />

            <p className="mr-16">Website.com</p>

            <SideMenu />

        </div>
    );
}