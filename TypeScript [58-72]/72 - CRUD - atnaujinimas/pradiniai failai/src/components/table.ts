import getPropCount from '../helpers/get-prop-count';

type RowData = {
  id: string,
  [key: string]: string
};

type TableProps<Type extends RowData> = {
  title: string,
  columns: Omit<Type, 'id'>,
  rowsData: Type[],
  editedProductId: string | null,
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
};

class Table<Type extends RowData> {
  static propsAreValid = <T extends RowData>({ columns, rowsData }: TableProps<T>): boolean => {
    const colCount = getPropCount(columns) + 1;

    return rowsData.every((row) => getPropCount(row) === colCount);
  };

  private props: TableProps<Type>;

  private thead: HTMLTableSectionElement;

  private tbody: HTMLTableSectionElement;

  public htmlElement: HTMLTableElement;

  public constructor(props: TableProps<Type>) {
    if (!Table.propsAreValid(props)) {
      throw new Error('TableProps are not compatible. Please check columns and rowsData');
    }

    this.props = props;
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');
    this.htmlElement = document.createElement('table');

    this.initialize();
    this.renderView();
  }

  private initialize() {
    this.htmlElement.className = 'table table-striped shadow border';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  }

  private renderHeadView = () => {
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
        <th></th>
      </tr>
    `;
  };

  private renderBodyView = () => {
    this.tbody.innerHTML = '';
    const rows = this.props.rowsData
      .map((rowData) => {
        const thisRowIsEdited = this.props.editedProductId === rowData.id;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-action btn-danger btn-sm';
        deleteButton.innerText = '🗙';
        deleteButton.addEventListener('click', () => this.props.onDelete(rowData.id));
        if (this.props.editedProductId !== null) deleteButton.setAttribute('disabled', 'true');

        const updateButton = document.createElement('button');
        updateButton.className = `btn btn-action btn-${thisRowIsEdited ? 'secondary' : 'warning'} btn-sm`;
        updateButton.innerText = thisRowIsEdited ? '🚫' : '↻';
        updateButton.addEventListener('click', () => this.props.onEdit(rowData.id));

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'd-flex gap-2 justify-content-end';
        buttonContainer.append(updateButton, deleteButton);

        const td = document.createElement('td');
        td.append(buttonContainer);

        const tr = document.createElement('tr');
        if (thisRowIsEdited) tr.classList.add('row-active');
        tr.innerHTML = Object.keys(this.props.columns)
          .map((key) => `<td>${rowData[key]}</td>`)
          .join('');
        tr.append(td);

        return tr;
      });

    this.tbody.append(...rows);
  };

  private renderView = () => {
    this.renderHeadView();
    this.renderBodyView();
  };

  updateProps = (props: Partial<TableProps<Type>>) => {
    this.props = {
      ...this.props,
      ...props,
    };

    this.renderView();
  };
}

export default Table;
