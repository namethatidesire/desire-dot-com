import { Server, Car, Gamepad2, type LucideIcon } from "lucide-react";
import { Lilex } from "next/font/google";

export interface Interest {
  icon: LucideIcon;
  title: string;
  body: React.ReactNode;
  images?: string[];
}

export const interests: Interest[] = [
  {
    icon: Server,
    title: "Self-Hosted Homelab",
    body: (
      <p>
        A personal Ubuntu server hosting an arrangement of services, many of which containerized by Docker:
        <ul className="list-disc list-inside">
          <li>
            Cloud photo storage (Immich)
          </li>
          <li>
            Private Git server (Gitea)
          </li>
          <li>
            Network storage (Samba)
          </li>
          <li>
            Game servers (Crafty Controller/Minecraft)
          </li>
          <li>
            Digital scrapbook for girlfriend and I (Tortoise).
          </li>
          <li>
            Remote access through a WireGuard VPN via PiVPN.
          </li>
        </ul> 
        <br/>
        Instead of relying on third-party services and worrying about privacy concerns, subscription fees (especially increasing ones),
        and lack of control over your data, my homelab adopts a privacy- and convenience-first mindset. Don't stress out over
        third-party services when you can do it yourself!
      </p>
    ),
  },
  {
    icon: Car,
    title: "Cars",
    body: (
			<p>
			It started with a red cartoon car and a game called Need for Speed: Underground on Microsoft's original XBOX.
			Now, it has become a life-long obsession. There are many cars I want to own and drive myself one day. For me, a car
			is a way you can express yourself and show off your creative mind. I'm passionate in making that dream come true as
			soon as possible.
      <br/>
      <br/>
      Here are some photos I took at the DRIVEN Toronto Car Show in 2025.
			</p>
		),
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    body: (
    <p>
      Gaming is one way that I unwind or spend some of my free time. I had an inclination towards competitive games like
      VALORANT and Rainbow Six: Siege, but recently I have been drawn to more casual or singleplayer games.
      <br/><br/>
      Immersive story-driven games like Cyberpunk 2077 or car-focused games like Forza Horizon 6 are what you can find me playing nowadays.
    </p>
    ),
  },
];