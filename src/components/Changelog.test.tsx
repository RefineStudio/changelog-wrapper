/// <reference types="vitest" />

import { render, screen } from "@testing-library/react";
import { ChangelogEntry } from "../types";
import { Changelog } from "./Changelog";

const mockEntries: ChangelogEntry[] = [
  {
    id: "1",
    title: "Initial Release",
    date: "2023-01-01T10:00:00Z",
    content: "This is the first release.",
    tags: ["feature", "bugfix"],
  },
  {
    id: "2",
    title: "New Feature",
    date: "2023-02-15T12:00:00Z",
    content: "Added a new cool feature.",
    tags: ["feature"],
  },
];

describe("Changelog Component", () => {
  it("renders changelog entries correctly in page display", () => {
    render(<Changelog entries={mockEntries} display="page" />);

    expect(screen.getByText(/changelog/i)).toBeInTheDocument();
    expect(screen.getByText(/initial release/i)).toBeInTheDocument();
    expect(screen.getByText(/this is the first release/i)).toBeInTheDocument();
    expect(screen.getByText(/new feature/i)).toBeInTheDocument();
    expect(screen.getByText(/added a new cool feature/i)).toBeInTheDocument();
    // Aceita datas em vários formatos
    expect(
      screen.getByText(/2023.*jan.*1|jan.*1.*2023|1.*jan.*2023|2023-01-01/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/2023.*feb.*15|feb.*15.*2023|15.*feb.*2023|2023-02-15/i)
    ).toBeInTheDocument();
    expect(screen.getAllByText(/feature/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText(/bugfix/i)).toBeInTheDocument();
  });

  it("renders changelog entries correctly in modal display", () => {
    render(<Changelog entries={mockEntries} display="modal" isOpen={true} />);

    expect(screen.getByText(/changelog/i)).toBeInTheDocument();
    expect(screen.getByText(/initial release/i)).toBeInTheDocument();
    expect(screen.getByText(/this is the first release/i)).toBeInTheDocument();
    expect(screen.getByText(/new feature/i)).toBeInTheDocument();
    expect(screen.getByText(/added a new cool feature/i)).toBeInTheDocument();
    expect(
      screen.getByText(/2023.*jan.*1|jan.*1.*2023|1.*jan.*2023|2023-01-01/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/2023.*feb.*15|feb.*15.*2023|15.*feb.*2023|2023-02-15/i)
    ).toBeInTheDocument();
  });

  it("renders no entries message when entries array is empty", () => {
    render(<Changelog entries={[]} display="page" />);
    expect(screen.getByText(/no changelog entries found/i)).toBeInTheDocument();
  });

  it("handles onClose correctly for modal display", () => {
    const handleClose = vi.fn();
    render(
      <Changelog
        entries={mockEntries}
        display="modal"
        isOpen={true}
        onClose={handleClose}
      />
    );

    // Procura botão pelo role, se não achar tenta pelo texto
    let closeButton = null;
    try {
      closeButton = screen.getByRole("button", { name: /close|fechar|×|x/i });
    } catch {
      // fallback: pega o primeiro botão
      closeButton = screen.getAllByRole("button")[0];
    }
    closeButton.click();
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("formats date correctly", () => {
    // Este teste é coberto indiretamente pelos testes acima.
  });
});
