import React from 'react';

import { Slider, PaginationNav, Table, ProgressBar, TableBody, TableCell, TableRow, TableHead, TableHeader, Button, Breadcrumb, BreadcrumbItem, ButtonSkeleton, ButtonSet, Tag, FormGroup, Checkbox, Form, FileUploader, NumberInput, RadioButton, RadioButtonGroup, Search, Select, SelectItem, TextArea, TextInput, Stack } from '@carbon/react';

const checkboxEvents = {
  className: 'some-class',
  labelText: 'Checkbox label',
};
const fieldsetCheckboxProps = () => ({
  className: 'some-class',
  legendText: 'Checkbox heading',
});
const numberInputProps = {
  className: 'some-class',
  id: 'number-input-1',
  label: 'Number Input',
  min: 0,
  max: 100,
  value: 50,
  step: 10,
  iconDescription: 'Add/decrement number',
};
const fileUploaderEvents = {
  buttonLabel: 'Add files',
  className: 'some-class',
};
const fieldsetFileUploaderProps = {
  className: 'some-class',
  legendText: 'File Uploader',
};
const radioProps = {
  className: 'some-class',
};
const searchProps = {
  className: 'some-class',
  size: 'md',
};
const fieldsetSearchProps = {
  className: 'some-class',
  legendText: 'Search',
};
const selectProps = {
  className: 'some-class',
};
const TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  placeholder: 'Placeholder text',
};
const PasswordProps = {
  className: 'some-class',
  id: 'test3',
  labelText: 'Password',
};
const InvalidPasswordProps = {
  className: 'some-class',
  id: 'test4',
  labelText: 'Password',
  invalid: true,
  invalidText: 'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
};
const textareaProps = {
  labelText: 'Text Area label',
  className: 'some-class',
  placeholder: 'Placeholder text',
  id: 'test5',
  rows: 4,
};
const buttonEvents = {
  className: 'some-class',
};

export const FormExample = () => (
  <Form aria-label="sample form">
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/#">Breadcrumb 1</a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb 4</BreadcrumbItem>
    </Breadcrumb>
    <Stack gap={7}>
      <FormGroup legendText={''}>
        <Tag className="some-class" type="red" title="Clear Filter">
          {'Tag content'}
        </Tag>
        <Tag className="some-class" type="magenta" title="Clear Filter">
          {'Tag content'}
        </Tag>
        <Tag className="some-class" type="purple" title="Clear Filter">
          {'Tag content'}
        </Tag>
        <Tag className="some-class" type="blue" title="Clear Filter">
          {'Tag content'}
        </Tag>
        <Tag className="some-class" type="cyan" title="Clear Filter">
          {'Tag content'}
        </Tag>
        <Tag className="some-class" type="teal" title="Clear Filter">
          {'Tag content'}
        </Tag>
        <Tag className="some-class" type="green" title="Clear Filter">
          {'Tag content'}
        </Tag>
        <Tag className="some-class" type="gray" title="Clear Filter">
          {'Tag content'}
        </Tag>
        <Tag className="some-class" type="cool-gray" title="Clear Filter">
          {'Tag content'}
        </Tag>
        <Tag className="some-class" type="warm-gray" title="Clear Filter">
          {'Tag content'}
        </Tag>
        <Tag className="some-class" type="high-contrast" title="Clear Filter">
          {'Tag content'}
        </Tag>
        <Tag className="some-class" type="outline" title="Clear Filter">
          {'Tag content'}
        </Tag>
      </FormGroup>
      <FormGroup {...fieldsetCheckboxProps()}>
        <Checkbox defaultChecked {...checkboxEvents} id="checkbox-0" />
        <Checkbox {...checkboxEvents} id="checkbox-1" />
        <Checkbox disabled {...checkboxEvents} id="checkbox-2" />
      </FormGroup>
      <NumberInput {...numberInputProps} />
      <FormGroup {...fieldsetFileUploaderProps}>
        <FileUploader {...fileUploaderEvents} id="file-1" role="button" labelDescription="Max file size is 500mb. Only .jpg files are supported." buttonLabel="Add file" buttonKind="primary" size="md" filenameStatus="edit" accept={['.jpg', '.png']} multiple={true} disabled={false} iconDescription="Dismiss file" name="" />
      </FormGroup>
      <RadioButtonGroup name="radio-button-group" defaultSelected="default-selected" legendText="Radio Button heading">
        <RadioButton value="standard" id="radio-1" labelText="Standard Radio Button" {...radioProps} />
        <RadioButton value="default-selected" labelText="Default Selected Radio Button" id="radio-2" {...radioProps} />
        <RadioButton value="blue" labelText="Standard Radio Button" id="radio-3" {...radioProps} />
        <RadioButton value="disabled" labelText="Disabled Radio Button" id="radio-4" disabled {...radioProps} />
      </RadioButtonGroup>
      <FormGroup {...fieldsetSearchProps}>
        <Search size="md"  id="search-1" labelText="Search" placeholder="Search" />
      </FormGroup>
      <Select {...selectProps} id="select-1" defaultValue="placeholder-item">
        <SelectItem disabled hidden value="placeholder-item" text="Choose an option" />
        <SelectItem value="option-1" text="Option 1" />
        <SelectItem value="option-2" text="Option 2" />
        <SelectItem value="option-3" text="Option 3" />
      </Select>
      <TextInput {...TextInputProps} />
      <TextInput type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" {...PasswordProps} />
      <TextInput type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" {...InvalidPasswordProps} />
      <TextArea {...textareaProps} />
      <Button type="submit" {...buttonEvents}>
        Submit
      </Button>
      <Button kind="danger">Button</Button>
      <Button kind="danger--tertiary">Tertiary Danger Button</Button>
      <Button kind="danger--ghost">Ghost Danger Button</Button>
      <ButtonSet>
        <Button kind="secondary">Secondary button</Button>
        <Button kind="primary">Primary button</Button>
      </ButtonSet>
      <ButtonSkeleton />
      <Table aria-label="sample table">
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Rule</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Other</TableHeader>
            <TableHeader>Example</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Load Balancer 1</TableCell>
            <TableCell>Round robin</TableCell>
            <TableCell>Starting</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Load Balancer 2</TableCell>
            <TableCell>DNS delegation</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Load Balancer 3</TableCell>
            <TableCell>Round robin</TableCell>
            <TableCell>Disabled</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Load Balancer 4</TableCell>
            <TableCell>Round robin</TableCell>
            <TableCell>Disabled</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Load Balancer 5</TableCell>
            <TableCell>Round robin</TableCell>
            <TableCell>Disabled</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Load Balancer 6</TableCell>
            <TableCell>Round robin</TableCell>
            <TableCell>Disabled</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Load Balancer 7</TableCell>
            <TableCell>Round robin</TableCell>
            <TableCell>Disabled</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>22</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <PaginationNav itemsShown={10} totalItems={25} />
      <ProgressBar label="Progress bar label" helperText="Optional helper text" value={75} />
      <Slider ariaLabelInput="Lower bound" invalidText="Invalid message goes here" labelText="Slider (must be an increment of 5)" max={100} min={0} step={5} stepMultiplier={5} unstable_ariaLabelInputUpper="Upper bound" value={50} warnText="Warning message goes here" />
    </Stack>
  </Form>
);
