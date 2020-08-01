export class ChatHistory {
  historyLimit = 10;
  entries = [];

  addEntry(entry: string) {
    this.entries.unshift(entry);
    this.entries = this.entries.slice(0, this.historyLimit);
  }

  getHistory() {
    const entries = [...this.entries];
    entries.reverse();
    return entries;
  }
}
