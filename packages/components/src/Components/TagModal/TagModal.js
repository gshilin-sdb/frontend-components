import React from 'react';
import PropTypes from 'prop-types';
import './tagModal.scss';
import { Modal } from '@patternfly/react-core';
import {
    Table,
    TableHeader,
    TableBody
  } from '@patternfly/react-table';
  

export default class TagModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: props.columns,
            rows: props.rows
        };
    }

    render() {
        const { systemName, toggleModal, isOpen, rows, columns, ...props } = this.props;
        return(
            <Modal
                {...props}
                isOpen={isOpen}
                title={`Tags for ${systemName}`}
                onClose={toggleModal}
                isFooterLeftAligned
            >
                {this.props.children}
                <Table variant="compact" cells={columns} rows={rows}>
                    <TableHeader />
                    <TableBody />
                </Table>
            </Modal>
        );
    }
}

TagModal.propTypes = {
    systemName: PropTypes.string,
    isOpen: PropTypes.bool,
    toggleModal: PropTypes.func,
    rows: PropTypes.array,
    columns: PropTypes.array
};

TagModal.defaultProps = {
    isOpen: false,
    toggleModal: () => undefined,
    columns: [
        { title: 'Name' },
        { title: 'Tag Source' }
    ],
    rows: []
}