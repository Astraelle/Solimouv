import ProgrammeHero from "../(components)/(programme)/Hero";
import ProgrammeList from "../(components)/(programme)/List";
import ProgrammeTabs from "../(components)/(programme)/Tabs";

export default async function Programme() {
//   const program = await getProgram();

  return (
    <main>
      <ProgrammeHero/>
      <ProgrammeTabs/>
      <ProgrammeList/>
    </main>
  );
}