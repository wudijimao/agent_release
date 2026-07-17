const colorTokens = [
  { name: 'primary', value: '#14B886', description: '主品牌色（按钮/高亮）', swatch: 'bg-primary' },
  { name: 'success', value: '#00b42a', description: '成功反馈', swatch: 'bg-success' },
  { name: 'warning', value: '#ff7d00', description: '风险提示', swatch: 'bg-warning' },
  { name: 'danger', value: '#f53f3f', description: '错误/删除操作', swatch: 'bg-danger' },
] as const;

const textTokens = [
  ['primaryText', '#1f1f1f'],
  ['secondaryText', '#444746'],
  ['tertiaryText', '#747775'],
] as const;

const typographyTokens = [
  ['xs', '12 / 16'],
  ['sm', '14 / 20'],
  ['base', '16 / 24'],
  ['lg', '18 / 26'],
  ['xl', '20 / 28'],
  ['2xl', '24 / 32'],
  ['3xl', '28 / 36'],
  ['4xl/5xl', '32/40 · 36/44'],
] as const;

const radiusTokens = [
  ['sm', '4px'],
  ['md', '8px'],
  ['lg', '12px'],
  ['xl', '16px'],
  ['2xl/3xl', '24 / 32px'],
  ['full', '999px'],
] as const;

const shadowTokens = [
  ['shadow-sm', '0 2px 8px #00000005'],
  ['shadow-md', '0 4px 20px #0000000d'],
  ['shadow-lg', '0 8px 30px #00000014'],
] as const;

const requirements = [
  '组件中禁止硬编码颜色，统一使用语义 Token；固定透明度使用 #RRGGBBAA Token。',
  '禁止非标间距，统一使用 2~48 的标准 scale。',
  '禁止自定义圆角，统一使用 sm / md / lg / xl / 2xl / 3xl / full。',
  '禁止自定义阴影与叠层阴影，仅使用 shadow-sm / md / lg。',
  '基础组件优先复用 BaseButton / BaseInput / BaseModal / BaseCard。',
  '静态视觉优先使用 Tailwind 规范；复杂选择器、动画和交互可使用 CSS Modules。',
] as const;

export function DesignSystemReference() {
  return (
    <section className="rounded-xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 pb-4 text-2xl font-bold text-primaryText">🎨 设计系统参考</h2>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-xl border border-borderGray bg-surface p-5">
          <h3 className="mb-4 text-lg font-semibold text-primaryText">颜色 Tokens（来自 tailwind.config.ts）</h3>
          <div className="space-y-3">
            {colorTokens.map((token) => (
              <div key={token.name} className="flex items-center gap-3">
                <div className={`h-8 w-8 rounded-md ${token.swatch}`} />
                <div className="text-sm">
                  <div className="font-medium text-primaryText">{token.name} · {token.value}</div>
                  <div className="text-tertiaryText">{token.description}</div>
                </div>
              </div>
            ))}

            <div className="mt-3 space-y-2 border-t border-lineSoft pt-3 text-sm">
              {textTokens.map(([name, value]) => (
                <div key={name} className="flex items-center justify-between">
                  <span className="text-secondaryText">{name}</span>
                  <span className="font-medium text-primaryText">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-borderGray bg-surface p-5">
          <h3 className="mb-4 text-lg font-semibold text-primaryText">排版规范（字号/行高）</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {typographyTokens.map(([name, value], index) => (
              <div
                key={name}
                className={`flex items-center justify-between pb-2 ${index < 6 ? 'border-b border-lineSoft' : ''}`}
              >
                <span className="text-secondaryText">{name}</span>
                <span className="font-medium text-primaryText">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-borderGray bg-surface p-5">
          <h3 className="mb-4 text-lg font-semibold text-primaryText">间距与圆角规范</h3>
          <div className="space-y-4 text-sm text-secondaryText">
            <div>
              <div className="mb-1 font-medium text-primaryText">Spacing Scale</div>
              <div>2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {radiusTokens.map(([name, value]) => (
                <div key={name} className="flex items-center justify-between rounded-md bg-bgLight px-3 py-2">
                  <span>{name}</span>
                  <span className="font-medium text-primaryText">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-borderGray bg-surface p-5">
          <h3 className="mb-4 text-lg font-semibold text-primaryText">阴影与交互状态</h3>
          <div className="space-y-3 text-sm text-secondaryText">
            {shadowTokens.map(([name, value]) => (
              <div key={name} className="flex items-center justify-between rounded-md bg-bgLight px-3 py-2">
                <span>{name}</span>
                <span className="font-medium text-primaryText">{value}</span>
              </div>
            ))}
            <div className="space-y-1 border-t border-lineSoft pt-2">
              <div><span className="font-medium text-primaryText">Button：</span>default / hover / active / disabled</div>
              <div><span className="font-medium text-primaryText">Input：</span>focus 使用 primary 边框与 ring</div>
              <div><span className="font-medium text-primaryText">Card：</span>hover 为 shadow + border 联动</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-lineSubtle bg-bgLight p-4">
        <h3 className="mb-2 text-base font-semibold text-primaryText">执行要求（最新）</h3>
        <div className="grid grid-cols-1 gap-2 text-sm text-secondaryText md:grid-cols-2">
          {requirements.map((requirement) => <div key={requirement}>· {requirement}</div>)}
        </div>
      </div>
    </section>
  );
}
