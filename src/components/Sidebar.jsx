import "../styles/sidebar.scss";

export function Sidebar() {
  const sections = Array(15).fill("Section ");
  const itens = sections.map((e, i) => <li key={i.toString()}>{e + ++i}</li>);
  return (
    <section className="sidebar">
      <ul>{itens}</ul>
    </section>
  );
}
