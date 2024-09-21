import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const StyledFooter = styled.footer`
    width : 100%;
    min-height : 100px;
    margin-top :10px;
    border-radius : 10px 10px 0 0 ;
    background-color : #f2f2f2;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
    align-items : center;
`;

const Caption = styled.p`
    font-size : 20px;
    color : #62757e;
    font-weight : 600;
`;

const Link = styled.a`
    color : #62757e;
    &:hover {
        text-decoration : underline;
    }
`;

const SocialMediaCtn = styled.div`
    display : flex;
    width : 100%;
    max-width : 200px;
    justify-content : space-evenly;
    align-items : center;
`;

const SocialMedia = styled.a`
    font-size : 16px;
    color : #62757e;  
`;

const socialMediaLinks = [
    { href: '', icon: <FaGithub /> },
    { href: '', icon: <FaLinkedin /> },
    { href: '', icon: <FaTwitter /> },
    { href: '', icon: <FaInstagram /> },
];

export default function Footer() {
    return (
        <StyledFooter>
            <Caption>Developed by <Link href={""}>Hritik Pandey</Link> </Caption>
            <SocialMediaCtn>
                {socialMediaLinks.map(({ href, icon }, index) => (
                    <SocialMedia key={index} href={href} target="_blank">
                        {icon}
                    </SocialMedia>
                ))}
            </SocialMediaCtn>
        </StyledFooter>
    )
}