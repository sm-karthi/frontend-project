import { BackToHomeLink, SideMenu } from '@/components';

export function Header() {
    return (
        <div className="flex justify-between text-[#adadad] text-xl">

            <BackToHomeLink />

            <SideMenu />

        </div>
    );
}