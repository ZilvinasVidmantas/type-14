import getPropCount from '../helpers/get-prop-count';

type RowData = {
  [key: string]: string
};

type TableProps<Type extends RowData> = {
  title: string,
  columns: Type,
  rowsData: Type[],
};

class Table<Type extends RowData> {
  static propsAreValid = <T extends RowData>({ columns, rowsData }: TableProps<T>): boolean => {
    const colCount = getPropCount(columns);

    return rowsData.every((row) => getPropCount(row) === colCount);
  };

  private props: TableProps<Type>;

  private thead: HTMLTableSectionElement;

  private tbody: HTMLTableSectionElement;

  public htmlElement: HTMLTableElement;

  constructor(props: TableProps<Type>) {
    if (!Table.propsAreValid(props)) {
      throw new Error('TableProps are not compatible. Please check columns and rowsData');
    }

    this.props = props;
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');
    this.htmlElement = document.createElement('table');

    this.initialize();
  }

  initializeHead = () => {
    const thElementsString = Object.values(this.props.columns)
      .map((columnName) => `<th>${columnName}</th>`)
      .join('');

    const columnCount = thElementsString.length;

    this.thead.className = 'bg-dark text-white';
    this.thead.innerHTML = `
      <tr class="text-center h4">
        <th colspan="${columnCount}">${this.props.title}</th>
      </tr>
      <tr>
        ${thElementsString}
      </tr>
    `;
  };

  initializeBody = () => {
    const trsHtmlStr = this.props.rowsData
      .map((rowData) => {
        const tdsHtmlString = Object.keys(this.props.columns)
          .map((key) => `<td>${rowData[key]}</td>`)
          .join('');

        return `<tr>${tdsHtmlString}</tr>`;
      })
      .join('');

    this.tbody.innerHTML = trsHtmlStr;
  };

  initialize() {
    this.initializeHead();
    this.initializeBody();

    this.htmlElement.className = 'table table-striped';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  }
}

export default Table;
